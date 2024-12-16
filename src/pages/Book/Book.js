import React, { useState } from "react";
import './Book.css';
import image1 from './../images/your-image.jpg'; 
import image2 from './../../images/FinalProject.jpg';
import image2 from './../../images/our-image.jpg';

function Book() {
    const [selectedTour, setSelectedTour] = useState(null);
    const [isBooking, setIsBooking] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "" });

    const tours = [
      {
        id: 1,
        title: "Зимний лагерь",
        description: "Проведите каникулы весело! С 3 января по 11 января.",
        price: "15,000 ₸",
        image: image1, 
      },
      {
        id: 2,
        title: "Летний лагерь",
        description: "Отдых и приключения летом.",
        price: "18,000 ₸",
        image: image2,
      },
      {
        id: 3,
        title: "Осенний лагерь",
        description: "Наслаждайтесь осенью в нашем лагере.",
        price: "13,000 ₸",
        image: image2, 
      },
    ];

    const handleBookClick = (tour) => {
      setSelectedTour(tour);
      setIsBooking(true);
    };

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      alert(`Бронирование подтверждено! Тур: ${selectedTour.title}, Имя: ${formData.name}, Email: ${formData.email}`);
      setFormData({ name: "", email: "" });
      setSelectedTour(null);
      setIsBooking(false);
    };

    return (
        <div className="book">
          <h1>Наши туры</h1>
          <div className="tours">
            {tours.map((tour) => (
              <div key={tour.id} className="tour-card">
                <img src={tour.image} alt={tour.title} className="tour-image" />
                <h2>{tour.title}</h2>
                <p>{tour.description}</p>
                <p>Цена: {tour.price}</p>
                <button onClick={() => handleBookClick(tour)}>Забронировать</button>
              </div>
            ))}
          </div>

          {isBooking && selectedTour && (
            <div className="booking-form">
              <h3>Бронирование тура: {selectedTour.title}</h3>
              <form onSubmit={handleSubmit}>
                <label>
                  Имя:
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <label>
                  Email:
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <button type="submit">Подтвердить бронирование</button>
                <button type="button" onClick={() => setIsBooking(false)}>Отмена</button>
              </form>
            </div>
          )}
        </div>
    );
}

export default Book;
