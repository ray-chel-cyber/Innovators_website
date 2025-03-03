

import React from "react";
import { motion } from "framer-motion";
import Image from "../assets/images/CassavaImage.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <motion.div
    id="about" 
      className="flex flex-col md:flex-row items-start justify-center p-8 mb-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }} 
      variants={containerVariants}
    >
      
      <motion.div className="w-full md:w-1/2" variants={imageVariants}>
        <img src={Image} alt="About" className="w-full h-auto rounded-lg border-amber-700 border-1" />
      </motion.div>

     
      <motion.div className="w-full md:w-1/2 pl-8" variants={textVariants}>
        <h2 className="text-4xl font-bold mb-4 text-gray-900">About Us</h2>
        <p className="text-lg">
          <span className="italic text-2xl underline decoration-green-700 underline-offset-8 decoration-2">
            Cas-Tech Glue
          </span>
          , an innovative solution from Beposo, Western Region, is addressing waste
          management and environmental pollution caused by discarded cassava starch
          and peels at gari processing factories. The solution involves creating a
          biodegradable adhesive glue using cassava starch and peels, which serves as
          an eco-friendly alternative to harmful synthetic adhesives. This approach
          not only reduces pollution but also adds value to cassava by-products,
          contributing to sustainable waste management.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;
