import React from "react";
import { motion } from "framer-motion";
import innovatorImage from "../assets/images/WhatsApp Image 2025-02-21 at 12.54.00 PM.jpeg";


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Innovator = () => {
  return (
    <motion.div
    id="innovator" 
      className="relative flex flex-col md:flex-row items-center justify-center mb-10 p-8 bg-amber-700 text-black space-y-8 md:space-y-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      
      <motion.div className="relative w-full md:w-1/3" variants={imageVariants}>
      
        <div className="absolute -top-6 -left-6 w-full h-full bg-white rounded-full scale-150 opacity-80"></div>

        
        <img
          src={innovatorImage}
          alt="Innovator"
          className="relative w-full h-auto rounded-lg shadow-lg z-10 transform transition-transform duration-300 hover:scale-105"
        />
      </motion.div>

      
      <div className="relative hidden md:block w-1/6">
        <svg
          viewBox="0 0 200 200"
          className="absolute left-0 top-0 w-full h-full fill-white"
        >
          <path d="M 0 200 Q 100 100 200 200 L 200 0 L 0 0 Z"></path>
        </svg>
      </div>

      
      <motion.div className="w-full md:w-1/2 pl-8" variants={textVariants}>
        <h2 className="text-4xl font-bold mb-4 text-white">
          <span className="underline decoration-green-700 underline-offset-8">
            Meet
          </span>{" "}
          the Innovators
        </h2>
        <p className="text-lg mb-4 text-white font-serif">
          Our innovative products are the result of years of research and development
          led by our visionary team. With a passion for creating high-quality adhesives,
          we have dedicated our career to perfecting the art of bonding materials. -{" "}
          <span className="italic text-white text-sm">Team Cash-Tech Glue Limited</span>
        </p>
        <p className="text-sm italic text-white font-serif">
          Join us in celebrating our journey and the groundbreaking products that have
          transformed the adhesive industry.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Innovator;
