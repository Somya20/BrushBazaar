import React from "react";
import './ImageText.css'

const ImageText = () => {
    return (
      <div className="image-container">
        <img src={require('./images/Image_with_text3.jpg')} alt="img" />
        <div className="text-overlay">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos amet corrupti iure, non quaerat quisquam delectus unde. Consequatur id exercitationem ea in itaque necessitatibus architecto quibusdam, perspiciatis ratione dolorum qui.
          <button className="button">Button Text</button>
        </div>
        
      </div>
    );
  };
  
  export default ImageText;