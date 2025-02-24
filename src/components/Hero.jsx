
import Image1 from '../assets/images/The Safety Tips You Need to Know Before Cooking With Cassava.jpg';
import React from 'react';

 

const Hero = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center mb-14"
      style={{ backgroundImage: `url(${Image1})` }}
    >
      <div className="absolute inset-0 bg-black/30"></div> 
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 italic">Welcome to <span className='italics text-amber-700 text-6xl'>Cas-Tech Glue</span></h1>
        <p className="  max-w-2xl mb-6 font-light text-2xl">
          Sustainable and Environmentally-friendly adhesives
        </p>
        <button className="bg-white hover:bg-gray-600 text-gray-800 font-semibold py-3 px-6 rounded-lg text-lg">
          Shop
        </button>
      </div>
    </div>
  );
};

export default Hero;