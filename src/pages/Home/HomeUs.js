import React, { useState } from "react";
import './Home.css';

const Home = () => {
  const images = [
    "blob:.https://images.hdqwalls.com/download/sunset-tree-red-ocean-sky-7w-3840x2160.jpg",
    "blob:https://web.telegram.org/cc12c923-225f-44a9-905a-62236a8c205e",
    "blob:https://web.telegram.org/b41fba62-56ef-4da2-b664-2c7e2948bf76",
    "blob:https://web.telegram.org/ecb2df7b-4a52-422e-b455-bcf40012a907"
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="home">
      <h2>Welcome to American School Camp!</h2>
      <p>
        Experience the ultimate adventure with fun activities, educational programs,
        and lifelong memories. Join us this summer!
      </p>

      <div className="carousel">
        <button className="prev" onClick={prevSlide}>Previous</button>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        <button className="next" onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
};

export default Home;
