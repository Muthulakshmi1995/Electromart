
import { Link } from 'react-router-dom'

const benefits = [
  {
    icon: '✦',
    title: 'Quality You Can Trust',
    description:
      'Explore carefully presented technology products with clear details to help you choose what suits you.',
  },
  {
    icon: '♡',
    title: 'Shopping Made Simple',
    description:
      'Discover mobiles, laptops, audio devices and accessories in one convenient shopping destination.',
  },
  {
    icon: '◇',
    title: 'Choices for Every Lifestyle',
    description:
      'Find useful everyday gadgets and technology options for your personal and professional needs.',
  },
  {
    icon: '↗',
    title: 'A Better Shopping Journey',
    description:
      'Enjoy an organised browsing experience designed to help you discover products with ease.',
  },
]

const categories = [
  { icon: '📱', name: 'Mobiles', text: 'Stay connected every day.' },
  { icon: '💻', name: 'Laptops', text: 'Power your work and ideas.' },
  { icon: '🎧', name: 'Audio', text: 'Enjoy every sound.' },
  { icon: '⌚', name: 'Wearables', text: 'Technology on the go.' },
  { icon: '🎒', name: 'Accessories', text: 'Small essentials, big convenience.' },
]

export default function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="eyebrow">GET TO KNOW US</span>
          <h1>
            About <span>ElectroMart</span>
          </h1>
          <p className="about-hero-lead">
            Technology should make life better, simpler and more connected.
          </p>
          <p className="about-hero-description">
            We bring everyday technology into one convenient place, helping
            you discover gadgets and accessories for the way you live, work
            and connect.
          </p>
          <div className="about-hero-actions">
            <Link to="/products" className="about-primary-btn">
              Explore Our Products →
            </Link>
            <a href="#our-story" className="about-secondary-btn">
              Discover Our Story
            </a>
          </div>
          <div className="about-trust-points">
            <span>✓ Easy product discovery</span>
            <span>✓ Everyday technology</span>
            <span>✓ Simple shopping experience</span>
          </div>
        </div>

        <div className="about-hero-visual">
          <div className="about-image-glow" />
          <img
            src="https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1000&q=85"
            alt="Laptop, headphones and electronic devices on a desk"
          />
          <div className="about-floating-card about-floating-top">
            <span>✦</span>
            <div>
              <strong>Technology for you</strong>
              <small>Made for everyday life</small>
            </div>
          </div>
          <div className="about-floating-card about-floating-bottom">
            <span className="about-floating-emoji">💜</span>
            <div>
              <strong>Your world, upgraded.</strong>
              <small>Discover something useful</small>
            </div>
          </div>
        </div>
      </section>

      <section className="about-story" id="our-story">
        <div className="about-story-image">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=85"
            alt="People working together with technology"
            loading="lazy"
          />
          <div className="about-image-label">
            <span>OUR APPROACH</span>
            <strong>Useful technology. A simpler experience.</strong>
          </div>
        </div>

        <div className="about-story-content">
          <span className="eyebrow">OUR STORY</span>
          <h2>
            Bringing the world of technology <span>closer to you.</span>
          </h2>
          <p>
            Choosing the right gadget can feel overwhelming when there are
            so many options. ElectroMart is designed to make exploring
            technology feel more organised and approachable.
          </p>
          <p>
            From smartphones and laptops to audio devices, wearables and
            everyday accessories, our goal is to bring different product
            categories together in a clear, easy-to-browse experience.
          </p>
          <p>
            We believe shopping for technology should help you make informed
            choices, discover useful products and find solutions that fit
            your everyday needs.
          </p>
          <Link to="/products" className="about-text-link">
            Find your next favourite gadget <span>→</span>
          </Link>
        </div>
      </section>

      <section className="about-mission-section">
        <div className="about-section-heading">
          <span className="eyebrow">WHAT GUIDES US</span>
          <h2>A clear purpose. A better experience.</h2>
          <p>
            Every part of ElectroMart is designed around making technology
            easier to explore.
          </p>
        </div>

        <div className="about-mission-grid">
          <article className="about-mission-card mission-purple">
            <span className="about-large-icon">◎</span>
            <span className="about-card-label">OUR MISSION</span>
            <h3>Make technology accessible.</h3>
            <p>
              To create a welcoming shopping destination where people can
              discover useful technology and explore their options with ease.
            </p>
          </article>

          <article className="about-mission-card mission-pink">
            <span className="about-large-icon">✧</span>
            <span className="about-card-label">OUR VISION</span>
            <h3>Make every choice simpler.</h3>
            <p>
              To build a convenient online destination that brings people
              and everyday technology closer together.
            </p>
          </article>

          <article className="about-mission-card mission-blue">
            <span className="about-large-icon">♡</span>
            <span className="about-card-label">OUR COMMITMENT</span>
            <h3>Put the customer first.</h3>
            <p>
              To keep the shopping experience clear, approachable and focused
              on helping customers explore products confidently.
            </p>
          </article>
        </div>
      </section>

      <section className="about-benefits-section">
        <div className="about-section-heading">
          <span className="eyebrow">THE ELECTROMART DIFFERENCE</span>
          <h2>Why explore with us?</h2>
          <p>
            A thoughtful shopping experience begins with making things easier
            for you.
          </p>
        </div>

        <div className="about-benefits-grid">
          {benefits.map((benefit, index) => (
            <article className="about-benefit-card" key={benefit.title}>
              <div className={`about-benefit-icon benefit-icon-${index + 1}`}>
                {benefit.icon}
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-categories-section">
        <div className="about-section-heading">
          <span className="eyebrow">EXPLORE OUR WORLD</span>
          <h2>Technology for every day.</h2>
          <p>
            Explore the categories that help you stay connected, productive
            and ready for what comes next.
          </p>
        </div>

        <div className="about-category-grid">
          {categories.map((category) => (
            <Link
              to={`/products?category=${encodeURIComponent(category.name)}`}
              className="about-category-card"
              key={category.name}
            >
              <span className="about-category-icon">{category.icon}</span>
              <h3>{category.name}</h3>
              <p>{category.text}</p>
              <span className="about-category-arrow">Explore →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="about-final-cta">
        <div className="about-cta-decoration about-cta-decoration-one" />
        <div className="about-cta-decoration about-cta-decoration-two" />
        <span className="eyebrow">YOUR NEXT DISCOVERY STARTS HERE</span>
        <h2>Ready to upgrade your everyday?</h2>
        <p>
          Explore our product collection and discover technology that fits
          your lifestyle.
        </p>
        <Link to="/products" className="about-cta-button">
          Start Exploring Products →
        </Link>
      </section>
    </main>
  )
}
