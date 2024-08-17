import React from 'react';
import './FolkArtStore.css'

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
            image: "/path-to-folk-art-book-1.jpg"
          },
          {
            title: "Whispers of the Loom",
            author: "Liam Threadgood",
            image: "/path-to-folk-art-book-2.jpg"
          },
          {
            title: "Patterns of the Past",
            author: "Sophia Craftwell",
            image: "/path-to-folk-art-book-3.jpg"
          },
          {
            title: "Colors of Heritage",
            author: "Marcus Brushstrokes",
            image: "/path-to-folk-art-book-4.jpg"
          },
          {
            title: "Echoes in Embroidery",
            author: "Isabel Needleworth",
            image: "/path-to-folk-art-book-5.jpg"
          }
        ].map((book, index) => (
          <div key={index} className="book-item">
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p className="description">A journey through folk traditions and artistry</p>
            <button className="view-more">View Tapestry</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FolkArtstore;