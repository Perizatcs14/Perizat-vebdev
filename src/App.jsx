
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/HomeUs';
import About from './pages/AboutUS/AboutUs';
import Contact from './pages/Contact/Contact.js';
import Header from './components/Header';
import Footer from './components/Footer/Footer';
import './components/styles/global.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
