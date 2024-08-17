import React from 'react';
import './Homepage.css'; // Import your CSS file
import butterfly from './images/butterfly.jpg'
import camera from './images/camera.jpg'

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="left-section">
        <img className ="left-section-img1" src={camera} alt="Plant"  height={300} width={300}/>
        <img className ="left-section-img2" src={butterfly} alt="Butterfly" />
      </div>

      <div className="right-section">
        <h1 >Welcome to Brush Bazaar</h1>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <div className="feature-cards">
          <div className="feature-card">
            <img src="feature-icon1.png" alt="Feature 1" />
            <h2>Lorem ipsum</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="feature-card">
            <img src="feature-icon2.png" alt="Feature 2" />
            <h2>Lorem ipsum</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="feature-card">
            <img src="feature-icon3.png" alt="Feature 3" />
            <h2>Lorem ipsum</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="feature-card">
            <img src="feature-icon4.png" alt="Feature 4" />
            <h2>Lorem ipsum</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
