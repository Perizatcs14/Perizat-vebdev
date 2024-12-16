
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Form } from 'react-router-dom';
import Home from './pages/Home/HomeUs.js';
import About from './pages/AboutUS/AboutUs.js';
import Contact from './pages/Contact/Contact.js';
import Header from './components/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Book from './pages/Book/Book.js';
import './components/styles/global.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book" element={<Book />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
