import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


const API = 'https://electromart-757f.onrender.com/api';


export default function Checkout({ cart, clearCart }) {
  const [form, setForm] = useState({ name: '', phone: '', address: '', city: '', pincode: '' });
  const [busy, setBusy] = useState(false);
  const nav = useNavigate();
  const items = Object.values(cart);
  const total = items.reduce((sum, item) => sum + Number(item.price) * item.qty, 0);

  function loadRazorpay() {
    return new Promise((resolve) => {
      if (window.Razorpay) return resolve(true);
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  }

  async function place(e) {
    e.preventDefault();
    if (!items.length) return alert('Your cart is empty');
    setBusy(true);
    try {
      const orderResponse = await fetch(`${API}/orders/`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: items.map(({ id, name, price, qty }) => ({ id, name, price, qty })),
          total_paise: Math.round(total * 100), customer_name: form.name,
          phone: form.phone, address: `${form.address}, ${form.city} - ${form.pincode}`
        })
      });
      const order = await orderResponse.json();
      if (!orderResponse.ok) throw new Error(order.error || 'Could not create order. Check Django server.');

      const paymentResponse = await fetch(`${API}/payments/create/`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ order_id: order.order_id, amount_paise: Math.round(total * 100) })
      });
      const payment = await paymentResponse.json();
      if (!paymentResponse.ok) throw new Error(payment.error || 'Could not start Razorpay payment.');
      const loaded = await loadRazorpay();
      if (!loaded) throw new Error('Razorpay checkout could not load. Check your internet connection.');

      const checkout = new window.Razorpay({
        key: payment.key_id,
        amount: payment.amount,
        currency: payment.currency,
        name: 'ElectroMart',
        description: `Order ${order.order_id}`,
        order_id: payment.razorpay_order_id,
        prefill: { name: form.name, contact: form.phone },
        notes: { address: `${form.address}, ${form.city} - ${form.pincode}` },
        theme: { color: '#6c3bd1' },
        handler: async (response) => {
          try {
            const verifyResponse = await fetch(`${API}/payments/verify/`, {
              method: 'POST', headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(response)
            });
            const verified = await verifyResponse.json();
            if (!verifyResponse.ok || !verified.verified) throw new Error(verified.error || 'Payment verification failed.');
            const saved = { id: verified.order_id, createdAt: new Date().toLocaleString(), items, total, address: form, status: 'Confirmed', paymentStatus: 'Paid' };
            const old = JSON.parse(localStorage.getItem('em_orders') || '[]');
            localStorage.setItem('em_orders', JSON.stringify([saved, ...old]));
            clearCart();
            nav('/order-success', { state: { order: saved, paid: true } });
          } catch (err) { alert(err.message); }
          finally { setBusy(false); }
        },
        modal: { ondismiss: () => setBusy(false) }
      });
      checkout.on('payment.failed', (response) => {
        setBusy(false);
        alert(response.error?.description || 'Payment failed. Please try again.');
      });
      checkout.open();
    } catch (err) {
      alert(err.message);
      setBusy(false);
    }
  }

  return <main className="account-page"><section className="panel wide"><h1>Checkout</h1>{!items.length ? <p>Your cart is empty. <Link to="/products">Shop now</Link></p> : <div className="checkout-grid"><form onSubmit={place}><h2>Delivery details</h2>{[['name','Full name'],['phone','Mobile number'],['address','Address'],['city','City'],['pincode','PIN code']].map(([key,label])=><label key={key}>{label}<input required value={form[key]} onChange={e=>setForm({...form,[key]:e.target.value})}/></label>)}<h2>Payment</h2><p>Pay securely using Razorpay Test Mode. No real money should be charged with test keys.</p><button className="primary-btn" disabled={busy}>{busy ? 'Connecting to Razorpay…' : `Pay ₹${total.toLocaleString('en-IN')} with Razorpay`}</button></form><aside className="order-summary"><h2>Order Summary</h2>{items.map(i=><p key={i.id}>{i.name} × {i.qty}<b>₹{(i.price*i.qty).toLocaleString('en-IN')}</b></p>)}<hr/><h3>Total <span>₹{total.toLocaleString('en-IN')}</span></h3></aside></div>}</section></main>;
}
