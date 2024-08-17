import React from 'react';
import './CollectionSection.css';

const products = [
  {
    id: 1,
    name: "Sunset Serenity",
    image: "https://example.com/sunset-serenity.jpg",
    price: 299.99,
    artist: "Emma Johnson",
    artistBio: "Contemporary landscape artist known for vibrant colors.",
    category: "Painting"
  },
  {
    id: 2,
    name: "Abstract Harmony",
    image: "https://example.com/abstract-harmony.jpg",
    price: 399.99,
    artist: "Michael Chen",
    artistBio: "Award-winning abstract artist with a unique geometric style.",
    category: "Painting"
  },
  {
    id: 3,
    name: "Rustic Vase",
    image: "https://example.com/rustic-vase.jpg",
    price: 79.99,
    artist: "Sarah Crafts",
    artistBio: "Skilled potter specializing in traditional techniques.",
    category: "Handicraft"
  },
  {
    id: 4,
    name: "Abstract Harmony",
    image: "https://example.com/abstract-harmony.jpg",
    price: 399.99,
    artist: "Michael Chen",
    artistBio: "Award-winning abstract artist with a unique geometric style.",
    category: "Painting",
  },
  {
    id: 5,
    name: "Whispering Dunes",
    image: "https://example.com/whispering-dunes.jpg",
    price: 249.99,
    artist: "Sarah Jones",
    artistBio: "Emerging landscape photographer known for her evocative desert scenes.",
    category: "Photography",
  },
  {
    id: 6,
    name: "Crimson Bloom",
    image: "https://example.com/crimson-bloom.jpg",
    price: 199.99,
    artist: "Li Wei",
    artistBio: "Master watercolorist specializing in vibrant floral compositions.",
    category: "Painting",
  },
  {
    id: 7,
    name: "City Symphony",
    image: "https://example.com/city-symphony.jpg",
    price: 499.99,
    artist: "David Lee",
    artistBio: "Acclaimed cityscapes painter capturing the energy and rhythm of urban life.",
    category: "Painting",
  },
  {
    id: 8,
    name: "Tranquil Seascape",
    image: "https://example.com/tranquil-seascape.jpg",
    price: 799.99,
    artist: "Anna Garcia",
    artistBio: "Renowned seascape painter known for her calming ocean scenes.",
    category: "Painting",
  },
  {
    id: 9,
    name: "Whispering Pines",
    image: "https://example.com/whispering-pines.jpg",
    price: 299.99,
    artist: "John Smith",
    artistBio: "Talented sculptor specializing in creating intricate wood sculptures.",
    category: "Sculpture",
  },
  {
    id:10,
    name: "Starry Night Dreamscape",
    image: "https://example.com/starry-night-dreamscape.jpg",
    price: 599.99,
    artist: "Emily Williams",
    artistBio: "Up-and-coming digital artist known for her surreal and dreamlike creations.",
    category: "Digital Art",
  },
  {
    id: 11,
    name: "Eternal Flame",
    image: "https://example.com/eternal-flame.jpg",
    price: 899.99,
    artist: "Peter Miller",
    artistBio: "Established glass artist known for his awe-inspiring sculptures using light and glass.",
    category: "Sculpture",
  },
  {
    name: "Whispers of the Forest",
    image: "https://example.com/whispers-of-the-forest.jpg",
    price: 349.99,
    artist: "Liam Carter",
    artistBio: "A nature-inspired artist who blends realism with abstract elements.",
    category: "Oil Painting",
  },

  // Add 9 more products here to reach a total of 12
];

const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={product.image} alt={product.name} className="product-image" />
    <h3 className="product-name">{product.name}</h3>
    <p className="product-price">${product.price.toFixed(2)}</p>
    <p className="product-artist">{product.artist}</p>
    <p className="product-bio">{product.artistBio}</p>
    <button className="purchase-btn">Add to Cart</button>
  </div>
);

const CollectionSection = () => {
  return (
    <section className="collection-section">
      <h2>Our Collection</h2>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default CollectionSection;