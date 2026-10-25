from django.urls import path
from . import views
urlpatterns=[path('health/',views.health),path('auth/register/',views.register),path('orders/',views.create_order),path('orders/<str:order_id>/',views.order_detail),path('payments/create/',views.create_payment),path('payments/verify/',views.verify_payment)]
