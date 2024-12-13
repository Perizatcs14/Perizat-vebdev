import React, { useState } from "react";
import './Contact.css'


function Contact() {
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
          <a 
          
            href="https://maps.app.goo.gl/5vjsi4TyGVxqXCHv9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="address-link"
          >
            
            ул. Юнусалиева 160
          </a>
        </p>
      </div>
    </div>
  );
}
  
  

export default Contact;

