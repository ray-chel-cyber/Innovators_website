import React from "react";
import { motion } from "framer-motion";
import innovatorImage from "../assets/images/WhatsApp Image 2025-02-21 at 12.54.00 PM.jpeg";

// Animation Variants
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
      className="flex flex-col md:flex-row items-center justify-center mb-10 p-8 bg-white text-black relative space-y-8 md:space-y-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }} // Allows repeated animation
      variants={containerVariants}
    >
      {/* Text Section */}
      <motion.div className="w-full md:w-1/2 md:order-2 pl-8" variants={textVariants}>
        <h2 className="text-4xl font-bold mb-4 text-gray-900">
          <span className="underline decoration-amber-700 underline-offset-8">
            Meet
          </span>{" "}
          the Innovators
        </h2>
        <p className="text-lg mb-4 text-black font-sans">
          Our innovative products are the result of years of research and development
          led by our visionary team. With a passion for creating high-quality adhesives,
          we have dedicated our career to perfecting the art of bonding materials. - <span className="italic text-amber-700 text-sm"> Team Cash-Tech Limited</span>
        </p>
        <p className="text-lg italic text-gray-800 font-serif">
          Join us in celebrating our journey and the groundbreaking products that have
          transformed the adhesive industry.
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div className="w-full md:w-1/4" variants={imageVariants}>
        <img
          src={innovatorImage}
          alt="Innovator"
          className="w-full h-auto rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
        />
      </motion.div>
    </motion.div>
  );
};

export default Innovator;
