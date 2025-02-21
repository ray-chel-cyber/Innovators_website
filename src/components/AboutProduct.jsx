import React from 'react';
import innovatorImage from '../assets/images/pexels-safari-consoler-3290243-15897036.jpg';

// 

const AboutProduct = () => {
    return (
      <div className="flex flex-col md:flex-row items-center justify-center p-8 bg-white rounded-lg shadow-lg text-black relative space-y-8 md:space-y-0">
        {/* Left Section (Text) */}
        <div className="w-full md:w-1/2 md:order-2 pl-8">
          <h2 className="text-4xl font-bold mb-4 underline text-gray-800">
            Meet the Innovator
          </h2>
          <p className="text-lg mb-4 text-gray-800">
            Our innovative products are the result of years of research and
            development led by our visionary innovator, <strong>[Innovator's Name]</strong>. 
            With a passion for creating high-quality adhesives, he has dedicated 
            his career to perfecting the art of bonding materials.
          </p>
          <p className="text-lg italic text-gray-800">
            Join us in celebrating her journey and the groundbreaking products
            that have transformed the adhesive industry.
          </p>
        </div>
        
        {/* Right Section (Image) */}
        <div className="w-full md:w-1/4 ">
          <img
            src={innovatorImage}
            alt="Innovator"
            className="w-full h-auto rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    );
  };
  
  

export default AboutProduct;
