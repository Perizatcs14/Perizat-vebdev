import React from "react";
import './Book.css';
import image1 from './../images/your-image.jpg';

function Book() {
    const [selectedTour, setSelectedTour] = useState(null);
    const [isBooking, setIsBooking] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "" });
}
  
    const tours = [
      {
        id: 1,
        title: "Зимний лагерь",
        description: "Проведите каникулы весело! С 3 января по 11 января.",
        price: "15,000 ",
        image: your-image.jpg,
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
      alert(
        `Бронирование подтверждено! Тур: ${selectedTour.title}, Имя: ${formData.name}, Email: ${formData.email}`
      );
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
                <img src={our-image.jpg} alt="" className="" />
                <h2>Prom Party</h2>
                <p>Сделайте свой выпускной незабываемым вместе с нами!</p>
                <p>Цена: {4500 }</p>
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
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label>
                  Email:
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </label>
                <button type="submit">Подтвердить бронирование</button>
                <button type="button" onClick={() => setIsBooking(false)}>
                  Отмена
                </button>
              </form>
            </div>
          )}
        </div>
      );
    
    
    export default Book;