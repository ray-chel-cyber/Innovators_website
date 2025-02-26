import React from 'react';
import innovatorImage from '../assets/images/WhatsApp Image 2025-02-21 at 12.54.00 PM.jpeg';

// 

const AboutProduct = () => {
    return (
      <div className="flex flex-col md:flex-row items-center justify-center mb-10 p-8 bg-white  text-black relative space-y-8 md:space-y-0">
        <div className="w-full md:w-1/2 md:order-2 pl-8">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            <span className='underline decoration-amber-700 underline-offset-8'>Meet</span> the Innovators
          </h2>
          <p className="text-lg mb-4 text-black font-sans">
            Our innovative products are the result of years of research and development led by our visionary team. 
            With a passion for creating high-quality adhesives, we have dedicated 
            our career to perfecting the art of bonding materials.
          </p>
          <p className="text-lg italic text-gray-800 font-serif">
            Join us in celebrating our journey and the groundbreaking products
            that have transformed the adhesive industry.
          </p>
        </div>
        
        
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
