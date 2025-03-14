import Image1 from "../assets/images/Véronique de Fombelle Tanneur.webp";
import React from "react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { delay: 0.5, duration: 0.6 } },
};

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative h-screen bg-cover bg-center mb-14 "
      style={{ backgroundImage: `url(${Image1})` }}
    >
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 italic"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={textVariants}
        >
          Welcome to{" "}
          <span className="italics text-amber-700 text-6xl">Cas-Tech Glue</span>
        </motion.h1>

        <motion.p
          className="max-w-2xl mb-6 text-md font-bold"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          Sustainable and Environmentally-friendly adhesives
        </motion.p>

        <motion.a
          href="https://paystack.shop/cas-tech-glue-limited"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-700 text-white font-semibold py-3 px-7 rounded-3xl text-lg transition duration-300 hover:bg-white hover:text-amber-700"
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Shop Now
        </motion.a>
      </div>
    </div>
  );
};

export default Hero;
