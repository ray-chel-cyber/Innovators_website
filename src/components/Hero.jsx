
// // import { Link } from 'react-router-dom';
import Image1 from '../assets/images/The Safety Tips You Need to Know Before Cooking With Cassava.jpg';
import React from 'react';
 

const Hero = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center mb-14"
      style={{ backgroundImage: `url(${Image1})` }}
    >
      <div className="absolute inset-0 bg-black/20"></div> 
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to My Website</h1>
        <p className="text-lg md:text-2xl max-w-2xl mb-6">
          Discover amazing content, explore our services, and learn how we can help you achieve more.
        </p>
        <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg text-lg">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;