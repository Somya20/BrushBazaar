import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, getTotalPrice, loading, error, shipping } = useCart();
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    calculateTotals();
  }, [cart, shipping]);

  const calculateTotals = () => {
    const newSubtotal = getTotalPrice();
    const newTax = newSubtotal * 0.1; // Assuming 10% tax
    const newTotal = newSubtotal + newTax + shipping;

    setSubtotal(newSubtotal);
    setTax(newTax);
    setTotal(newTotal);
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)}</p>
                  <div className="quantity-control">
                    <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>Tax (10%): ${tax.toFixed(2)}</p>
            <p>Shipping: ${shipping.toFixed(2)}</p>
            <p>Total: ${total.toFixed(2)}</p>
            <button onClick={clearCart}>Clear Cart</button>
            <button onClick={() => alert('Checkout functionality to be implemented')}>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;