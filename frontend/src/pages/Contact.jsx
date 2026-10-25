
import { useState } from 'react'
import { Link } from 'react-router-dom'

const faqs = [
  {
    question: 'How can I find a product?',
    answer:
      'Visit our Products page to browse mobiles, laptops, audio devices, wearables and accessories. You can also use the search bar.',
  },
  {
    question: 'Can I ask about a specific product?',
    answer:
      'Yes. Enter the product name and your question in the message form, and include your email address.',
  },
  {
    question: 'Is this contact form connected to email?',
    answer:
      'This form currently demonstrates frontend submission only. A backend or email service is needed to deliver messages.',
  },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
    setSubmitted(false)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
    setForm({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <span className="eyebrow">WE'RE HERE TO HELP</span>
        <h1>Let's start a <span>conversation.</span></h1>
        <p>
          Questions, product enquiries or feedback? We'd love to hear from you.
          Send us a message and explore how ElectroMart can help.
        </p>
        <div className="contact-hero-links">
          <Link to="/products" className="contact-shop-link">
            Explore Products →
          </Link>
          <a href="#contact-details" className="contact-text-link">
            Contact information ↓
          </a>
        </div>
        <div className="contact-hero-decoration contact-decoration-one" />
        <div className="contact-hero-decoration contact-decoration-two" />
      </section>

      <section className="contact-main" id="contact-details">
        <aside className="contact-info-panel">
          <span className="eyebrow">CONTACT ELECTROMART</span>
          <h2>How can we <span>help you?</span></h2>
          <p className="contact-info-intro">
            Choose a topic, tell us what's on your mind, and we'll make your
            shopping experience easier.
          </p>

          <div className="contact-info-item">
            <div className="contact-info-icon">✉</div>
            <div>
              <h3>Email enquiries</h3>
              <p>Send your questions through the message form.</p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon">⌕</div>
            <div>
              <h3>Product questions</h3>
              <p>Ask us about a gadget or product category.</p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon">♡</div>
            <div>
              <h3>Feedback & suggestions</h3>
              <p>Share your ideas to help improve the experience.</p>
            </div>
          </div>

          <div className="contact-info-note">
            <span>✦</span>
            <p>
              Not sure where to start? Send us your question using the form.
            </p>
          </div>
        </aside>

        <div className="contact-form-panel">
          <div className="contact-form-heading">
            <span className="eyebrow">SEND US A MESSAGE</span>
            <h2>We'd love to <span>hear from you.</span></h2>
            <p>Fill in the details below to submit your message.</p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-field-row">
              <div className="contact-field">
                <label htmlFor="name">Your name *</label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Muthu"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="email">Email address *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="subject">What is it about? *</label>
              <input
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Product enquiry, feedback..."
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="message">Your message *</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows={6}
                required
              />
            </div>

            <button type="submit" className="contact-submit-btn">
              Submit Message <span>→</span>
            </button>

            {submitted && (
              <p className="contact-success" role="status">
                ✓ Thank you! Your message has been submitted on this page.
              </p>
            )}

            <p className="contact-form-note">
              <span>🔒</span> Your message is handled by this page's demo form.
            </p>
          </form>
        </div>
      </section>

      <section className="contact-faq-section">
        <div className="contact-faq-heading">
          <span className="eyebrow">QUICK ANSWERS</span>
          <h2>Frequently asked <span>questions.</span></h2>
          <p>A few helpful details before you get in touch.</p>
        </div>

        <div className="contact-faq-grid">
          {faqs.map((faq, index) => (
            <article className="contact-faq-card" key={faq.question}>
              <span className="contact-faq-number">
                0{index + 1}
              </span>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-bottom-cta">
        <span className="eyebrow">KEEP EXPLORING</span>
        <h2>Your next favourite gadget is waiting.</h2>
        <p>Discover technology and accessories for your everyday life.</p>
        <Link to="/products" className="contact-cta-btn">
          Browse Products →
        </Link>
      </section>
    </main>
  )
}
