import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button onClick={goToPrevious}>Previous</button>
      <img src={images[currentIndex]} alt="carousel" />
      <button onClick={goToNext}>Next</button>
    </div>
  );
};

const CarouselComponent = () => {
  const images = [
    'https://rickandmortyapi.com/api/character/avatar/50.jpeg',
    'https://rickandmortyapi.com/api/character/avatar/95.jpeg',
    'https://rickandmortyapi.com/api/character/avatar/107.jpeg',
  ];

  return <Carousel images={images} />;
};

export default CarouselComponent;