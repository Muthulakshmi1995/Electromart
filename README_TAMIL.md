# ElectroMart — React + Django + SQLite + Razorpay Test Mode

இந்த project-ல் React/Vite frontend, Django REST API backend, SQLite database, Razorpay Test Mode integration scaffold மற்றும் My Profile → My Orders → Track Order page உள்ளது.

## 1. Frontend run
PowerShell Terminal 1:
```powershell
cd frontend
npm install
npm run dev
```
Browser: Vite terminal காட்டும் URL (பொதுவாக http://localhost:5173/).

## 2. Django backend run
PowerShell Terminal 2-ல் project root-இலிருந்து:
```powershell
cd backend
py -m venv venv
.\venv\Scripts\Activate.ps1
pip install -r requirements.txt
Copy-Item .env.example .env
```
`backend/.env`-ஐ திறந்து உங்கள் local settings மற்றும் Razorpay TEST keys சேர்க்கவும். Secret values-ஐ chat/GitHub-ல் பகிர வேண்டாம்.

பிறகு:
```powershell
py manage.py migrate
py manage.py runserver
```
API health check: http://127.0.0.1:8000/api/health/

## 3. Razorpay Test Mode
1. Razorpay Dashboard-ல் Test Mode தேர்வு செய்து Test API Key ID + Key Secret உருவாக்கவும்.
2. `backend/.env`-ல் `RAZORPAY_KEY_ID=rzp_test_...` மற்றும் `RAZORPAY_KEY_SECRET=...` அமைக்கவும்.
3. Django server-ஐ restart செய்யவும்.
4. Cart → Checkout → Pay with Razorpay வழியாக சோதிக்கவும்.

## 4. Order tracking
Payment success ஆன order browser-இன் My Profile → My Orders பகுதியில் தெரியும். **Track Order** button-ஐ அழுத்தினால் தனி tracking timeline page திறக்கும். தற்போதைய tracking timeline UI/local browser-ல் சேமிக்கப்பட்ட order status-ஐப் பயன்படுத்துகிறது; உண்மையான courier live updates இல்லை. Backend API-யில் order status stored ஆகும், ஆனால் user login ownership/authentication, trusted server-side product pricing, courier provider integration, webhook/idempotency ஆகியவை productionக்கு முன் மேம்படுத்தப்பட வேண்டும்.

## Security notes
- `.env` private; GitHub-க்கு upload செய்ய வேண்டாம்.
- Razorpay Secret Key frontend React code-ல் இருக்கக் கூடாது.
- இந்த project learning/Test Mode scaffold. Payment successful என்று account-ல் சோதிக்காமல் கருத வேண்டாம்.
