import json, hmac, hashlib, uuid
from django.conf import settings
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from .models import Order
from .serializers import OrderSerializer
try: import razorpay
except ImportError: razorpay=None
@api_view(['GET'])
@permission_classes([AllowAny])
def health(request): return Response({'status':'ok','service':'ElectroMart API'})
@api_view(['POST'])
@permission_classes([AllowAny])
def register(request):
 email=request.data.get('email','').strip().lower(); password=request.data.get('password','')
 if not email or len(password)<6:return Response({'error':'Valid email and password (6+ chars) required'},status=400)
 if User.objects.filter(username=email).exists():return Response({'error':'Email already registered'},status=400)
 user=User.objects.create_user(username=email,email=email,password=password)
 return Response({'id':user.id,'email':user.email},status=201)
@api_view(['POST'])
@permission_classes([AllowAny])
def create_order(request):
 data=request.data
 try:
  items=data['items']; total=int(data['total_paise']); name=data['customer_name']; phone=data['phone']; address=data['address']
  if not items or total<=0: raise ValueError()
 except (KeyError,ValueError,TypeError): return Response({'error':'Missing or invalid order details'},status=400)
 order=Order.objects.create(order_id='EM'+uuid.uuid4().hex[:10].upper(),customer_name=name,phone=phone,address=address,items=items,total_paise=total)
 return Response(OrderSerializer(order).data,status=201)
@api_view(['POST'])
@permission_classes([AllowAny])
def create_payment(request):
 if not settings.RAZORPAY_KEY_ID or not settings.RAZORPAY_KEY_SECRET or razorpay is None:return Response({'error':'Razorpay is not configured. Add test keys to backend/.env and install requirements.'},status=503)
 try: amount=int(request.data['amount_paise']); order_id=request.data['order_id']; order=Order.objects.get(order_id=order_id)
 except Exception:return Response({'error':'Valid order_id and amount_paise required'},status=400)
 if amount != order.total_paise:return Response({'error':'Amount mismatch'},status=400)
 client=razorpay.Client(auth=(settings.RAZORPAY_KEY_ID,settings.RAZORPAY_KEY_SECRET))
 rz=client.order.create({'amount':amount,'currency':'INR','receipt':order.order_id})
 order.razorpay_order_id=rz['id'];order.save(update_fields=['razorpay_order_id'])
 return Response({'key_id':settings.RAZORPAY_KEY_ID,'razorpay_order_id':rz['id'],'amount':rz['amount'],'currency':'INR'})
@api_view(['POST'])
@permission_classes([AllowAny])
def verify_payment(request):
 try: oid=request.data['razorpay_order_id']; pid=request.data['razorpay_payment_id']; sig=request.data['razorpay_signature']; order=Order.objects.get(razorpay_order_id=oid)
 except Exception:return Response({'error':'Invalid payment details'},status=400)
 expected=hmac.new(settings.RAZORPAY_KEY_SECRET.encode(),f'{oid}|{pid}'.encode(),hashlib.sha256).hexdigest()
 if not hmac.compare_digest(expected,sig):return Response({'error':'Payment signature verification failed'},status=400)
 order.payment_status='Paid';order.status='Confirmed';order.save(update_fields=['payment_status','status'])
 return Response({'verified':True,'order_id':order.order_id,'status':order.status})
@api_view(['GET'])
@permission_classes([AllowAny])
def order_detail(request,order_id):
 try: order=Order.objects.get(order_id=order_id)
 except Order.DoesNotExist:return Response({'error':'Order not found'},status=404)
 return Response(OrderSerializer(order).data)
