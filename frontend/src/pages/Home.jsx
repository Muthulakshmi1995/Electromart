
import { Link } from 'react-router-dom'
import products from '../products'
const categories = [
  {
    name: 'Mobiles',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
    emoji: '📱',
  },
  {
    name: 'Laptops',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400',
    emoji: '💻',
  },
  {
    name: 'Audio',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    emoji: '🎧',
  },
  {
    name: 'Wearables',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
    emoji: '⌚',
  },
  {
    name: 'Accessories',
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400',
    emoji: '🎒',
  },
]

const benefits = [
  {
    icon: '🚚',
    title: 'Fast Delivery',
    text: 'Get your favourite gadgets delivered to your doorstep.',
  },
  {
    icon: '🛡️',
    title: 'Quality Products',
    text: 'Discover technology for your everyday needs.',
  },
  {
    icon: '💝',
    title: 'Amazing Deals',
    text: 'Explore exciting offers across our collections.',
  },
  {
    icon: '💬',
    title: 'Customer Support',
    text: 'We are here to help with your shopping questions.',
  },
]

export default function Home() {
  return (
    <main className="home-page">
      <section className="hero" id="home">
        <div className="hero-content">
          <span className="eyebrow">
            ✨ YOUR ONE-STOP TECH STORE
          </span>

          <h1>
            Upgrade Your World with{' '}
            <span>Smart Technology.</span>
          </h1>

          <p>
            Discover exciting electronics, everyday essentials and
            technology that makes life easier. Your next favourite
            gadget is waiting for you!
          </p>

          <div className="home-hero-actions">
            <Link to="/products" className="shop-btn">
              Explore Products →
            </Link>
            <Link to="/about" className="home-secondary-btn">
              Discover ElectroMart
            </Link>
          </div>

          <div className="hero-points">
            <span>✓ Quality Products</span>
            <span>✓ Easy Shopping</span>
            <span>✓ Helpful Support</span>
          </div>
        </div>

        <div className="hero-art">
          <div className="hero-circle">
            <span className="hero-phone">📱</span>
            <span className="floating-icon icon-one">🎧</span>
            <span className="floating-icon icon-two">⌚</span>
            <span className="floating-icon icon-three">💻</span>
            <span className="floating-icon icon-four">⚡</span>
          </div>
          <div className="sale-tag">
            SPECIAL
            <br />
            DEALS!
          </div>
          <div className="hero-caption">
            <span>💜</span>
            Technology you will love
          </div>
        </div>
      </section>

      <section className="home-benefits section">
        <div className="home-benefit-heading">
          <span className="eyebrow">A BETTER WAY TO SHOP</span>
          <h2>Shopping made delightful</h2>
        </div>

        <div className="home-benefit-grid">
          {benefits.map((benefit) => (
            <article className="home-benefit-card" key={benefit.title}>
              <span className="home-benefit-icon">{benefit.icon}</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="categories section" id="categories">
        <div className="section-heading">
          <div>
            <span className="eyebrow">SHOP BY CATEGORY</span>
            <h2>Find Your Favourite</h2>
            <p>Explore tech essentials for every part of your life.</p>
          </div>
          <Link to="/products" className="home-view-all">
            View all products →
          </Link>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <Link
              className="category-card"
              to={`/products?category=${encodeURIComponent(category.name)}`}
              key={category.name}
            >
              <img
                className="category-photo"
                src={category.image}
                alt={category.name}
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
              <span className="home-category-emoji">{category.emoji}</span>
              <strong>{category.name}</strong>
              <small>Explore collection →</small>
            </Link>
          ))}
        </div>
      </section>
      
      
<section className="home-products section">
  <div className="section-heading">
    <div>
      <span className="eyebrow">OUR POPULAR PICKS</span>
      <h2>Featured Products</h2>
      <p>Discover gadgets picked for your everyday life.</p>
    </div>

    <Link to="/products" className="home-view-all">
      View all products →
    </Link>
  </div>

  <div className="product-grid home-product-grid">
    {products.slice(0, 4).map((product) => (
      <article className="product-card home-product-card" key={product.id}>
        <div className="product-image home-product-image">
          <span className="offer-tag">{product.offer}</span>

          <img
            className="product-photo"
            src={product.image}
            alt={product.name}
            onLoad={(e) => {
              const emoji = e.currentTarget.parentElement.querySelector(
                '.product-emoji'
              )
              if (emoji) emoji.style.display = 'none'
            }}
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />

          <span className="product-emoji">{product.emoji}</span>
        </div>

        <div className="product-info home-product-info">
          <small>{product.category}</small>
          <h3>{product.name}</h3>

          <div className="product-bottom home-product-bottom">
            <strong>₹{product.price.toLocaleString('en-IN')}</strong>
            <Link to="/products" className="add-btn">
              View →
            </Link>
          </div>
        </div>
      </article>
    ))}
  </div>
</section>


      <section className="home-featured section">
        <div className="home-featured-content">
          <span className="eyebrow">YOUR NEXT FAVOURITE GADGET</span>
          <h2>Small upgrades. Big possibilities.</h2>
          <p>
            From everyday accessories to powerful devices, find
            products that fit your needs and your lifestyle.
          </p>
          <Link to="/products" className="shop-btn">
            Browse the Collection →
          </Link>
        </div>

        <div className="home-featured-art">
          <span>💻</span>
          <span>🎧</span>
          <span>📱</span>
          <span>⌚</span>
          <div>Find your next favourite</div>
        </div>
      </section>

      <section className="home-bottom-cta section">
        <span className="eyebrow">YOUR TECH JOURNEY STARTS HERE</span>
        <h2>Ready to discover something amazing?</h2>
        <p>Explore our collections and find the technology that works for you.</p>
        <Link to="/products" className="shop-btn">
          Start Exploring →
        </Link>
      </section>
    </main>
  )
}
