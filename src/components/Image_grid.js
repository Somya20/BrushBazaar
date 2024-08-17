import React from 'react';
import './image_grid.css';
import truck from './images/truck.png';
import gift from './images/gift.png';
import wallet from './images/wallet.png';
import offer from './images/offers.jpg';

const ImageGrid = () => {
  return (
    <div className="image-grid">
      <div className="grid-item yellow">
       
        <p> <img src={truck} alt="Delivery" /><b> Delivery</b></p>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="grid-item orange">
        <p><img src={gift} alt="Gift" /> Gift</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="grid-item blue">
        <p><img src={wallet} alt="Wallet" /> Wallet</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="grid-item green">
        <p><img src={offer} alt="Offers" /> Offers</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
};

export default ImageGrid;
