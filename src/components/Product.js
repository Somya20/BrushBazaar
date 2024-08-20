import React from 'react';
import { useCart } from './CartContext';

const Product = ({ product }) => {
  const { cart, addToCart } = useCart();

  const isInCart = cart.some(item => item.id === product.id);
  const isOutOfStock = product.stock === 0;

  const handleAddToCart = () => {
    if (!isInCart && !isOutOfStock) {
      addToCart(product);
    }
  };

  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Price: ${product.price.toFixed(2)}</p>
      <button 
        onClick={handleAddToCart}
        disabled={isOutOfStock || isInCart}
        className={isOutOfStock ? 'out-of-stock' : isInCart ? 'in-cart' : ''}
      >
        {isOutOfStock ? 'Out of Stock' : isInCart ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default Product;