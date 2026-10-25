import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import products from '../products'

const categories = [
  'All',
  'Mobiles',
  'Laptops',
  'Audio',
  'Wearables',
  'Accessories',
]

export default function Products({ addToCart }) {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  
const [searchParams] = useSearchParams()

useEffect(() => {
  setSearch(searchParams.get('search') || '')
  setSelectedCategory(searchParams.get('category') || 'All')
}, [searchParams])

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase())

    const matchesCategory =
      selectedCategory === 'All' ||
      product.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <main className="products-section">
      <h1>Explore Our Products</h1>
      <p>Find the perfect technology for your everyday life.</p>

      <div className="search-box">
        <span>⌕</span>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="category-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={
              selectedCategory === category ? 'active' : ''
            }
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <p className="product-count">
        {filteredProducts.length} products found
      </p>

      <div className="product-grid">
    
{filteredProducts.map(product => (
  <article className="product-card" key={product.id}>
    <div className="product-image">
      <img
        className="product-photo"
        src={product.image}
        alt={product.name}
        onLoad={(e) => {
          e.currentTarget.nextElementSibling.style.display = 'none'
        }}
        onError={(e) => {
          e.currentTarget.style.display = 'none'
          e.currentTarget.nextElementSibling.style.display = 'block'
        }}
      />
      <span className="product-emoji">{product.emoji}</span>
    </div>

    <div className="product-info">
      <small>{product.category}</small>
      <h3>{product.name}</h3>
   
      <div className="product-bottom">
        <strong>₹{product.price.toLocaleString('en-IN')}</strong>
        <button
          className="add-btn"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  </article>
))}

        
      </div>

      {filteredProducts.length === 0 && (
        <p>No products found. Try another search.</p>
      )}
    </main>
  )
}
