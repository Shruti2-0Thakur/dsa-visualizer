import React from 'react';
import About from '../components/Home/About';
import Algorithms from '../components/Home/Algorithms';
import HeroSection from '../components/Home/HeroSection';
import Footer from '../components/Layout/Footer';

const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <About/>
      <Algorithms/>
      <Footer/>
    </div>
  );
};

export default HomePage;
