import React, { useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonialsData = [
    {
      name: 'Tatiana Levin',
      image: '/images/tatiana-levin.jpg', // Place your image in the public/images folder
      testimonial: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
      rating: 5,
    },
    {
      name: 'Livia Geidt',
      image: '/images/livia-geidt.jpg', // Place your image in the public/images folder
      testimonial: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
      rating: 4,
    },
    {
      name: 'James Geidt',
      image: '/images/james-geidt.jpg', // Place your image in the public/images folder
      testimonial: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
      rating: 3,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum</p>
      <div className="testimonial-carousel">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial-card ${index === activeIndex ? 'active' : ''}`}
          >
            <img src={testimonial.image} alt={testimonial.name} />
            <p>{testimonial.testimonial}</p>
            <div className="rating">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="star">★</span>
              ))}
            </div>
            <p className="testimonial-name">{testimonial.name}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        {testimonialsData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          ></span>
        ))}
      </div>
      <button
        className="prev-button"
        onClick={handlePrevClick}
        aria-label="Previous Testimonial"
      >
        &#8249;
      </button>
      <button
        className="next-button"
        onClick={handleNextClick}
        aria-label="Next Testimonial"
      >
        &#8250;
      </button>
    </section>
  );
};

export default Testimonials;
