import React from 'react';
import Navbar from './Components/Navbar';


import Login from './Pages/Login';
import Register from './Pages/Register';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import AboutPage from './Pages/AboutPage';
import ContactUs from './Pages/ContactUs';
import ProductPage from './Pages/ProductPage';
import Footer from './Components/Footer';

function App() {
  return (
    <Router basename="/cosmetics-website" >
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/about-us' element={<AboutPage/>} />
        <Route path ='/contact-us' element={<ContactUs/>} />
        <Route path ='/product' element={<ProductPage/>} />
      </Routes>

    
    
    
      <Footer /> 
    </Router>
  );
}

export default App;
