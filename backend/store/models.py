from django.db import models
from django.contrib.auth.models import User
class Order(models.Model):
 user=models.ForeignKey(User,on_delete=models.CASCADE,related_name='orders',null=True,blank=True)
 order_id=models.CharField(max_length=24,unique=True)
 customer_name=models.CharField(max_length=120)
 phone=models.CharField(max_length=20)
 address=models.TextField()
 items=models.JSONField()
 total_paise=models.PositiveIntegerField()
 status=models.CharField(max_length=40,default='Order Placed')
 payment_status=models.CharField(max_length=40,default='Pending')
 razorpay_order_id=models.CharField(max_length=100,blank=True)
 created_at=models.DateTimeField(auto_now_add=True)
 def __str__(self): return self.order_id
