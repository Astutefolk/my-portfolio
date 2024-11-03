import './assets/css/slicknav.min.css'; 
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import './assets/css/magnific-popup.css'; 
import './assets/css/bootstrap.min.css'; 
import './assets/css/elegant-icons.css'; 
import './assets/css/font-awesome.min.css'; 
import './assets/css/owl.carousel.min.css'; 

import './assets/js/jquery-3.3.1.min.js';
import './assets/js/bootstrap.min.js';
import './assets/js/jquery.magnific-popup.min.js';
import './assets/js/masonry.pkgd.min.js';
import './assets/js/mixitup.min.js';
import './assets/js/owl.carousel.min.js';
import Header from './static/Header';
import Hero from './components/Hero';
import About from './components/About';
import Tools from './components/Tools';
import Counter from './components/Counter.jsx';
import Bcontact from './components/Bcontact';
import Contact from './components/Contact.jsx';
import Footer from './static/Footer';

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToSection />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <Hero />
              <About />
              <Tools />
              <Counter />
              <Bcontact />
              <Contact />
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
export default App
