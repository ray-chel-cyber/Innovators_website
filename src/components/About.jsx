import React from 'react'
import Image from '../assets/images/O que é o polvilho doce_.jpg'



const About = () => {
 return (
  <div className="flex flex-col md:flex-row items-start justify-center p-8 mb-10">
    <div className="w-full md:w-1/2">
      <img src={Image} alt="About" className="w-full h-auto rounded-lg" />
    </div>
    <div className="w-full md:w-1/2 pl-8">
      <h2 className="text-4xl font-bold mb-4">About Us</h2>
      <p className="text-lg">
      <span className='italic text-2xl'> Cas-Tech Glue,</span> an innovative solution from Beposo, Western Region, is addressing waste management and environmental pollution caused by discarded cassava starch and peels at gari processing factories. The solution involves creating a biodegradable adhesive glue using cassava starch and peels, which serves as an eco-friendly alternative to harmful synthetic adhesives. This approach not only reduces pollution but also adds value to cassava by-products, contributing to sustainable waste management.

      </p>
    </div>
  </div>
);
};
export default About