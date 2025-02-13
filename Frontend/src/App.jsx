import React from 'react';
import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import Product from './Components/Product';
import About_us from './Components/About_us';
import { Testimonials } from './Components/Testimonials';
import Gallery from './Components/Gallery';
import Newsletter from './Components/Newsletter';
import Contact from './Components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <Product />
      <Gallery />
      <About_us />
      <Testimonials />
      <Newsletter />
      <Contact />
    </>
  );
}

export default App;
