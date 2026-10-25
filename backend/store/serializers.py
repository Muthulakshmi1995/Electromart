from rest_framework import serializers
from .models import Order
class OrderSerializer(serializers.ModelSerializer):
 class Meta:
  model=Order; fields=['order_id','customer_name','phone','address','items','total_paise','status','payment_status','created_at']
