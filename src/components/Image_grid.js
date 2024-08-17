import React from 'react';
import './image_grid.css';
import truck from './images/truck.jpg'
import gift from './images/gift.jpg';
import wallet from './images/wallet.png';
import offer from './images/offers.jpg'

const ImageGrid = () => {
  return (
    <div className="image-grid">
      <div className="grid-item yellow">
        <img src={truck} alt="Delivery" />
        <p>Delivery</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="grid-item orange">
        <img src={gift}alt="Gift" />
        <p>Gift</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="grid-item blue">
        <img src={wallet} alt="Wallet" />
        <p>Wallet</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="grid-item green">
        <img src={offer} alt="offers" />
        <p>Offers</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
};

export default ImageGrid;
