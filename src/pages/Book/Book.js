import React from "react";
import './Book.css';
import image5 from './../../images/photo_5404486408485333041_x.jpg';

function Book() {
    const tours = [
    { id: 3, title: 'Зимний лагерь', description: 'Проведите каникулы весело!. С 3 января по 11 января.', price: 15.000  },
    ];
}
 
  
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
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        
        <button type="submit">Забронировать</button>
        <button type="button" onClick={onClose}>Отмена</button>
      </form>
    </div>
  );
}

export default BookingForm;
