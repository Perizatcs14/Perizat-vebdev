import React, { useState } from "react";
import './Contact.css'

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your message, ${form.name}!`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact">
      <h2>Свяжитесь с нами</h2>
      <p>Если у вас есть вопросы или предложения, заполните форму ниже или свяжитесь с нами через наши контакты.</p>

      <div className="social-media">
        <h3>Наши контакты</h3>
        <ul>
          <li>
            <span>Телефон:</span> <a href="tel:+9960500908459">+123 456 7890</a>
          </li>
          <li>
            <span>Email:</span> <a href="mailto:info@americanschoolcamp.com">info@americanschoolcamp.com</a>
          </li>
          <li>
            <span>Instagram:</span> <a href="https://www.instagram.com/americanschool.camp/?/" target="_blank" rel="noopener noreferrer">instagram.com/americanschool.camp</a>
          </li>
          <li>
            <span>TikTok:</span> <a href="https://www.tiktok.com/@americanschool.kg?_t=ZS-8sBW9c7kGgS&_r=1" target="_blank" rel="noopener noreferrer">Наш ТикТок@americanschoolcamp</a>
          </li>
          <li>
            <span>WhatsApp:</span> <a href="https://wa.me/9960500908459" target="_blank" rel="noopener noreferrer">Написать нам</a>
          </li>
        </ul>
      </div>

      <div className="contact">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send</button>
        </form>
        <div className="address">
          <h3>Our Address</h3>
          <p>
            Мы находимся по адресу:
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2925.911928105952!2d74.61925017595681!3d42.83247417115297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7f0d442aff3%3A0x9e50337c8e8ca266!2zQU1FUklDQU4gU0NIT09MINC40Lwu0JXQs9C40LzQsdCw0LXQstC-0Lk!5e0!3m2!1sru!2skg!4v1734077766527!5m2!1sru!2skg"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
            ул. Юнусалиева 160
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
