#!/usr/bin/env bash
set -o errexit

pip install -r requirements.txt
python manage.py migrate
python -c "import razorpay; print('Razorpay installed successfully on Render')"