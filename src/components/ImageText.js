
import React from "react";
import './ImageText.css'

const ImageText = () => {
    return (
      <div className="image-container">
        <img src={require('./images/image.jpeg')} alt="img" />
        <div className="text-overlay">
        Art is a mirror of the soul. It reflects what we are and what we aspire to be. It is a way of expressing ourselves without words, a way of connecting with others on a deeper level. It is a way of finding meaning in the world.
          
        </div>
        
      </div>
    );
  };
  
  export default ImageText;
