import React from 'react';
import './DigitalArtGallery.css'

const DigitalArtGallery = () => {
  return (
    <div className="art-discovery">
      <h1>Explore Digital Masterpieces</h1>
      <nav>
        <ul>
          <li className="active">NEW CREATIONS</li>
          <li>UPCOMING DROPS</li>
          <li>TRENDING WORKS</li>
          <li>AWARD-WINNING ART</li>
        </ul>
      </nav>
      <div className="art-grid">
        <ArtPiece 
          image="/path-to-abstract-art.jpg"
          title="Neon Dreams"
          description="A vibrant exploration of color and form in the digital realm."
        />
        <ArtPiece 
          image="/path-to-pixel-art.jpg"
          title="Pixelated Memories"
          artist="PixelMaster"
          description="Nostalgia reimagined through the lens of modern pixel art."
        />
        <ArtPiece 
          image="/path-to-3d-render.jpg"
          title="Cybernetic Oasis"
          artist="FutureScaper"
          description="A surreal 3D landscape blending nature and technology."
        />
        <ArtPiece 
          image="/path-to-generative-art.jpg"
          title="Algorithmic Harmony"
          description="Patterns and structures born from the dance of code and chaos."
        />
        <ArtPiece 
          image="/path-to-digital-painting.jpg"
          title="Ethereal Brushstrokes"
          artist="DigiPainter"
          description="Where traditional techniques meet digital innovation."
        />
      </div>
      <div className="navigation-arrows">
        <button className="arrow left">{'<'}</button>
        <button className="arrow right">{'>'}</button>
      </div>
    </div>
  );
};

const ArtPiece = ({ image, title, artist, description }) => {
  return (
    <div className="art-card">
      <img src={image} alt={title} />
      <div className="art-info">
        <h3>{title}</h3>
        {artist && <p className="artist">{artist}</p>}
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default DigitalArtGallery;