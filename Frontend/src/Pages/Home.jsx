import React from 'react'
import Slider from '../Components/Slider';
import Product from '../Components/Product';
import { Testimonials } from '../Components/Testimonials';
import Gallery from '../Components/Gallery';
import Newsletter from '../Components/Newsletter';

function Home() {
  return (
    <div id='home'>
          <Slider />
          <Gallery />
          <Testimonials />
          <Newsletter />

    </div>
  )
}

export default Home