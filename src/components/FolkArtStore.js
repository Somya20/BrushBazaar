
import React from 'react';
import './FolkArtStore.css';
import book1 from './images/folk-art-book-1.png';
import book2 from './images/folk-art-book-2.png';
import book3 from './images/folk-art-book-3.png';
import book4 from './images/folk-art-book-4.png';
import book5 from './images/folk-art-book-5.png';

const FolkArtstore = () => {
  return (
    <div className="folk-art-bookstore">
      <h1>Folk Art Bookstore</h1>
      <p className="subtitle">Discover stories woven with tradition</p>
      
      <div className="book-gallery">
        {[
          {
            title: "The Tapestry of Tales",
            author: "Emma Stitchworth",
            image:book1 
          },
          {
            title: "Whispers of the Loom",
            author: "Liam Threadgood",
            image: book2
          },
          {
            title: "Patterns of the Past ",
            author: "Sophia Craftwell",
            image: book3
          },
          {
            title: "Colors of Heritage",
            author: "Marcus Brushstrokes",
            image: book4
          },
          {
            title: "Echoes in Embroidery",
            author: "Isabel Needleworth",
            image: book5
          }
        ].map((book, index) => (
          <div key={index} className="book-item">
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p className="description">A journey through folk traditions and artistry</p>
            <div className="button-container">
              <button className="view-more">View Tapestry</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FolkArtstore;
