import React, { useState } from "react";
import './Book.css';
import image5 from './../../images/photo_5404486408485333041_x.jpg';


function BookingForm({ selectedTour, onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Бронирование подтверждено для тура: ${selectedTour.title}, Имя: ${name}, Email: ${email}`);
    onClose();
  };

  return (
    <div className="booking-form">
      <h3>Бронирование тура: {selectedTour.title}</h3>
      <form onSubmit={handleSubmit}>
        <label>Имя:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <div className="form-buttons">
          <button type="submit">Забронировать</button>
          <button type="button" onClick={onClose}>Отмена</button>
        </div>
      </form>
    </div>
  );
}


function Book() {
  const tours = [
    { id: 1, title: 'Зимний лагерь', description: 'Проведите каникулы весело! С 3 января по 11 января.', price: 15000 },
    { id: 2, title: 'Летний лагерь', description: 'Отдых и приключения летом.', price: 18000 },
    { id: 3, title: 'Осенний лагерь', description: 'Наслаждайтесь осенью в нашем лагере.', price: 13000 },
  ];

  const [selectedTour, setSelectedTour] = useState(null);

  const handleBook = (tour) => {
    setSelectedTour(tour);
  };

  const handleClose = () => {
    setSelectedTour(null);
  };

  return (
    <div className="book">
      <h1>Наши туры</h1>
      <div className="tours-container">
        {tours.map((tour) => (
          <div key={tour.id} className="tour-card">
            <h3>{tour.title}</h3>
            <p>{tour.description}</p>
            <p><strong>Цена:</strong> {tour.price} ₸</p>
            <button onClick={() => handleBook(tour)}>Забронировать</button>
          </div>
        ))}
      </div>

      {selectedTour && (
        <BookingForm
          selectedTour={selectedTour}
          onClose={handleClose}
        />
      )}
    </div>
  );
}

export default Book;
