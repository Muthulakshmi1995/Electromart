# Generated for ElectroMart's initial SQLite schema.
import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models

class Migration(migrations.Migration):
    initial = True
    dependencies = [migrations.swappable_dependency(settings.AUTH_USER_MODEL)]
    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('order_id', models.CharField(max_length=24, unique=True)),
                ('customer_name', models.CharField(max_length=120)),
                ('phone', models.CharField(max_length=20)),
                ('address', models.TextField()),
                ('items', models.JSONField()),
                ('total_paise', models.PositiveIntegerField()),
                ('status', models.CharField(default='Order Placed', max_length=40)),
                ('payment_status', models.CharField(default='Pending', max_length=40)),
                ('razorpay_order_id', models.CharField(blank=True, max_length=100)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='orders', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
