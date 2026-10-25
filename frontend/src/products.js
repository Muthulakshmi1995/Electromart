const products = [
  // Mobiles
  { id: 1, name: 'Samsung Galaxy S25', category: 'Mobiles', price: 74999, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500', emoji: '📱', offer: 'Best Seller'},
  { id: 2, name: 'iPhone 16', category: 'Mobiles', price: 69900, image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500', emoji: '📱', offer: 'Popular' },
  { id: 3, name: 'Google Pixel 9', category: 'Mobiles', price: 59999, image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500', emoji: '📱', offer: 'Hot Deal' },
  { id: 4, name: 'OnePlus 13R', category: 'Mobiles', price: 42999, image: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=500', emoji: '📱', offer: 'Trending'},
  { id: 5, name: 'Redmi Note 14', category: 'Mobiles', price: 17999, image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format', emoji: '📱', offer: 'Value Pick'  },

  // Laptops
  { id: 6, name: 'HP Pavilion Laptop', category: 'Laptops', price: 58999, image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500', emoji: '💻', offer: 'Best Seller' },
  { id: 7, name: 'Dell Inspiron 15', category: 'Laptops', price: 52999, image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=80',emoji: '💻', offer: 'Popular' },
  { id: 8, name: 'ASUS Vivobook 15', category: 'Laptops', price: 47999, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500', emoji: '💻', offer: 'Hot Deal' },
  { id: 9, name: 'Lenovo IdeaPad Slim', category: 'Laptops', price: 44999, image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500', emoji: '💻', offer: 'Trending' },
  { id: 10, name: 'Apple MacBook Air', category: 'Laptops', price: 99900, image: 'https://images.unsplash.com/photo-1511385348-a52b4a160dc2?w=500', emoji: '💻', offer: 'Premium' },

  // Audio
  { id: 11, name: 'Sony Wireless Headphones', category: 'Audio', price: 4999, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500', emoji: '🎧', offer: 'Best Seller' },
  { id: 12, name: 'JBL Bluetooth Speaker', category: 'Audio', price: 2499, image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500', emoji: '🔊', offer: 'Hot Deal' },
  { id: 13, name: 'boAt Airdopes Earbuds', category: 'Audio', price: 1499, image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500', emoji: '🎵', offer: 'Popular' },
  { id: 14, name: 'JBL Over-Ear Headset', category: 'Audio', price: 3299, image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500', emoji: '🎧', offer: 'Trending' },
  { id: 15, name: 'Noise Portable Speaker', category: 'Audio', price: 1999, image: 'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500', emoji: '🔊', offer: 'Value Pick' },

  // Wearables
  { id: 16, name: 'Samsung Galaxy Watch', category: 'Wearables', price: 12999, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500', emoji: '⌚', offer: 'Best Seller' },
  { id: 17, name: 'Apple Watch SE', category: 'Wearables', price: 24900, image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500', emoji: '⌚', offer: 'Premium' },
  { id: 18, name: 'Noise ColorFit Watch', category: 'Wearables', price: 2999, image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSudCqo89JiWfrwkhqwxQhIP85mCRP-LbtwTAKj9zXIqac1GP0zpV75Whog_LwrwCDfI7w9GkCcjeqxDB1EwkBB5HBdHTXj', emoji: '⌚', offer: 'Popular' },
  { id: 19, name: 'Fitbit Inspire Tracker', category: 'Wearables', price: 5999, image: 'https://images.unsplash.com/photo-1557935728-e6d1eaabe558?w=500', emoji: '⌚', offer: 'Trending' },
  { id: 20, name: 'boAt Smart Ring', category: 'Wearables', price: 4999, image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTOX2IxnbjGDeEcD7uEzb_5oJ67N2mvnGn8HK4mjwJvb_EpB4G--qw--MtER6I1wkBb1JALdc7gB0jnkwzypho0nEmhR2jPPj-jTZVaqN2PVt21hvIBoW9w0aRgWPAQPIrs5-h3nQ&usqp=CAc', emoji: '💍', offer: 'New' },

  // Accessories
  { id: 21, name: 'Logitech Wireless Mouse', category: 'Accessories', price: 1299, image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500', emoji: '🖱️', offer: 'Best Seller' },
  { id: 22, name: 'Samsung 25W Charger', category: 'Accessories', price: 999, image: 'https://images.unsplash.com/photo-1596877445530-ad74838754c6?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D', emoji: '🔌', offer: 'Essential' },
  { id: 23, name: 'Laptop Backpack', category: 'Accessories', price: 1499, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8fQc2ItSddyRKfgZalV6YXzUvBDwQSMFOQpaV1QZ4sQ&s=10', emoji: '🎒', offer: 'Popular' },
  { id: 24, name: 'USB-C Hub Adapter', category: 'Accessories', price: 1299, image: 'https://images.unsplash.com/photo-1625842268584-8f3296236761?w=500', emoji: '🔌', offer: 'Hot Deal' },
  { id: 25, name: 'Mobile Screen Protector', category: 'Accessories', price: 399, image: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=500', emoji: '🛡️', offer: 'Value Pick' },
]
export default products