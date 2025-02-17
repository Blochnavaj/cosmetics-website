import React from 'react';
import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import Product from './Components/Product';
import About_us from './Components/About_us';
import { Testimonials } from './Components/Testimonials';
import Gallery from './Components/Gallery';
import Newsletter from './Components/Newsletter';
import Contact from './Components/Contact';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router  >
      <Navbar />
      
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Slider />
      <Product />
      <Gallery />
      <About_us />
      <Testimonials />
      <Newsletter />
      <Contact /> 
    </Router>
  );
}

export default App;
