import React, { useState } from 'react';
import './DigitalArtGallery.css'
import neonDreams from './images/neon_dreams.jpg';
import PixelatedMemories from './images/Pixelated Memories.jpg'
import CyberneticOasis from './images/Cybernetic Oasis.jpg'
import AlgorithmicHarmony from './images/Algorithmic Harmony.jpg'
import EtherealBrushstrokes from './images/Ethereal Brushstrokes.jpg'
import cosmicWaves from './images/Cosmic Waves.jpg'
import UrbanJungle from './images/Urban Jungle.jpg'
import industrialOasis from './images/industrialOasis.jpg'
import underwaterOdyssey from './images/underwaterOdyssey.jpg'
import surrealLandscapes from './images/surrealLandscapes.jpg'
import abstractExpression from './images/abstractExpression.jpg'
import digitalAlchemy from './images/digitalAlchemy.jpg'

const artworks = [
  {
    id: 1,
    image: neonDreams,
    title: "Neon Dreams",
    description: "A vibrant exploration of color and form in the digital realm."
  },
  {
    id: 2,
    image: PixelatedMemories,
    title: "Pixelated Memories",
    artist: "PixelMaster",
    description: "Nostalgia reimagined through the lens of modern pixel art."
  },
  {
    id: 3,
    image: CyberneticOasis,
    title: "Cybernetic Oasis",
    artist: "FutureScaper",
    description: "A surreal 3D landscape blending nature and technology."
  },
  {
    id: 4,
    image: AlgorithmicHarmony,
    title: "Algorithmic Harmony",
    description: "Patterns and structures born from the dance of code and chaos."
  },
  {
    id: 5,
    image: EtherealBrushstrokes,
    title: "Ethereal Brushstrokes",
    artist: "DigiPainter",
    description: "Where traditional techniques meet digital innovation."
  },
  {
    id: 6,
    image: cosmicWaves,
    title: "Cosmic Waves",
    description: "A mesmerizing journey through interstellar space."
  },
  {
    id: 7,
    image: UrbanJungle,
    title: "Urban Jungle",
    description: "A vibrant tapestry of city life and nature."
  },
  {
    id: 8,
    image: industrialOasis,
    title: "Industrial Oasis",
    description: "A harmonious blend of urban architecture and lush greenery."
  },
  {
    id: 9,
    image: underwaterOdyssey,
    title: "Underwater Odyssey",
    description: "Dive into a world of vibrant marine life and hidden treasures."
  },
  {
    id: 10,
    image: surrealLandscapes,
    title: "Surreal Landscapes",
    description: "Explore dreamlike worlds where reality bends and twists."
  },
  {
    id: 11,
    image: abstractExpression,
    title: "Abstract Expression",
    description: "Immerse yourself in a world of pure color, form, and emotion."
  },
  {
    id: 12,
    image: digitalAlchemy,
    title: "Digital Alchemy",
    description: "Witness the magic of creation as pixels transform into art."
  }
];

const artworksPerPage = 4;

const DigitalArtGallery = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleLeftClick = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - artworksPerPage, 0));
  };

  const handleRightClick = () => {
    setStartIndex((prevIndex) => 
      Math.min(prevIndex + artworksPerPage, artworks.length - artworksPerPage)
    );
  };

  const displayedArtworks = artworks.slice(startIndex, startIndex + artworksPerPage);

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
        {displayedArtworks.map((artwork) => (
          <ArtPiece
            key={artwork.id}
            image={artwork.image}
            title={artwork.title}
            artist={artwork.artist}
            description={artwork.description}
          />
        ))}
      </div>
      <div className="navigation-arrows">
        <button 
          className="arrow left" 
          onClick={handleLeftClick}
          disabled={startIndex === 0}
        >
          {'<'}
        </button>
        <button 
          className="arrow right" 
          onClick={handleRightClick}
          disabled={startIndex + artworksPerPage >= artworks.length}
        >
          {'>'}
        </button>
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