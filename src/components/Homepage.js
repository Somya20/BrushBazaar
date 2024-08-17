import React from 'react';
import './Homepage.css'; // Import your CSS file
import butterfly from './images/butterfly.jpg'
import camera from './images/camera.jpg'
import feature1 from './images/feature_1.png'
import feature2 from './images/feature_2.png'
import feature3 from './images/feature_3.png'
import feature4 from "./images/feature_4.png"

const Homepage = () => {
  return (
    <div className='heading'>
      <h2>Welcome to Brush Bazaar</h2>
      <p className='para_prop'>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>


      <div className="homepage">
      <div className="left-section">
        <img className ="left-section-img1" src={camera} alt="Plant"  height={300} width={300}/>
        <img className ="left-section-img2" src={butterfly} alt="Butterfly" height={700} width={700}/>
      </div>

      <div className="right-section">
        <div>
        <div className="feature-cards">
          <div className="feature-card">
            <img src={feature1} alt="Feature 1" />
            <h2>Lorem ipsum</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="feature-card">
            <img src={feature2} alt="Feature 2" />
            <h2>Lorem ipsum</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="feature-card">
            <img src={feature3} alt="Feature 3" />
            <h2>Lorem ipsum</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="feature-card">
            <img src={feature4} alt="Feature 4" />
            <h2>Lorem ipsum</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        </div>
      </div>
    </div>
    </div>
    

  );
};

export default Homepage;
