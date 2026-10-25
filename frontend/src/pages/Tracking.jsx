import { Link, useParams } from 'react-router-dom';

const steps = [
  { title: 'Order Placed', detail: 'We received your order.' },
  { title: 'Confirmed', detail: 'Your order and payment are confirmed.' },
  { title: 'Shipped', detail: 'Your package has left the warehouse.' },
  { title: 'Out for Delivery', detail: 'Your package is with the delivery partner.' },
  { title: 'Delivered', detail: 'Your package has been delivered.' },
];

export default function Tracking() {
  const { orderId } = useParams();
  const orders = JSON.parse(localStorage.getItem('em_orders') || '[]');
  const order = orders.find((item) => String(item.id) === String(orderId));
  if (!order) return <main className="account-page"><section className="panel wide"><h1>Order not found</h1><p>இந்த browser-ல் இந்த Order ID கிடைக்கவில்லை.</p><Link className="primary-btn inline-btn" to="/profile">Back to My Orders</Link></section></main>;
  const current = order.status === 'Delivered' ? 4 : order.status === 'Out for Delivery' ? 3 : order.status === 'Shipped' ? 2 : order.status === 'Confirmed' ? 1 : 0;
  return <main className="account-page"><section className="panel wide tracking-panel"><p className="eyebrow">ELECTROMART DELIVERY</p><h1>Track your order</h1><div className="tracking-summary"><div><span>Order ID</span><strong>#{order.id}</strong></div><div><span>Order date</span><strong>{order.createdAt}</strong></div><div><span>Order total</span><strong>₹{Number(order.total).toLocaleString('en-IN')}</strong></div><div><span>Payment</span><strong>{order.paymentStatus || 'Pending'}</strong></div></div><h2>Shipment progress</h2><div className="tracking-timeline">{steps.map((step, index) => <div className={`tracking-step ${index < current ? 'complete' : ''} ${index === current ? 'active' : ''}`} key={step.title}><div className="tracking-dot">{index < current ? '✓' : index + 1}</div><div><h3>{step.title}{index === current ? <span className="tracking-current"> Current status</span> : null}</h3><p>{step.detail}</p></div></div>)}</div><p className="tracking-note">Status updates shown here are based on the order status saved in this project. Real courier tracking requires a shipping partner integration.</p><Link className="primary-btn inline-btn" to="/profile">Back to My Orders</Link></section></main>;
}
