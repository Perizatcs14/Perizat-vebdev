import React, { useState } from "react";
import './Home.css';
import finalimg from './../../images/FinalProject.jpg'
import image1 from './../../images/FinalProject.jpg';
import image2 from './../../images/Final Project2.jpg';
import image3 from './../../images/Final Project3.jpg';
import image4 from './../../images/Final Project4.jpg';

const Home = () => {
  const images = [finalimg, image1, image2, image3,image4];




    
  

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
    
      
      <main className="home-main">
        <p>
          Откройте дверь к незабываемым приключениям этим летом вместе с "American School Camp"! 
          Наш лагерь предлагает уникальное сочетание развлечений, обучения и культурного обмена. 
          Это место, где дети могут развивать свои таланты, заводить новых друзей и открывать для себя мир 
          в атмосфере безопасности и заботы.
        </p>
      </main>

      <div className="carousel">
        <button className="prev" onClick={prevSlide}>Previous</button>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        <button className="next" onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
};

export default Home;
