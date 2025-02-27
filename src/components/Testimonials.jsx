import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import customerImage1 from "../assets/images/6ee0de12-90de-4634-bb81-d3f9b2649d40.jpg";
import customerImage2 from "../assets/images/15faecdf-7402-4a29-845e-98c0b93f7a2e.jpg";
import customerImage3 from "../assets/images/Beauty Model Photography.jpg";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    image: customerImage1,
    text: "This product changed my life!",
    role: "Founder, Tech Co.",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: customerImage2,
    text: "Amazing quality and fantastic customer service. Highly recommend to everyone!",
    role: "CEO, Fashion Ltd.",
  },
  {
    id: 3,
    name: "Alice Johnson",
    image: customerImage3,
    text: "A wonderful experience from start to finish. I will definitely be a returning customer.",
    role: "Owner, Art Studio",
  },
];

// Animation Variants
const swipeVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: (direction) => ({
    x: direction > 0 ? -100 : 100,
    opacity: 0,
    transition: { duration: 0.6, ease: "easeIn" },
  }),
};

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-white py-16 flex flex-col items-center relative">
      <div className="text-center px-4 max-w-4xl">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-gray-900 mb-10">
          <span className="underline decoration-amber-700 underline-offset-8">
            What
          </span>{" "}
          Our Customers Say
        </h2>

        <div className="relative flex items-center justify-center w-full">
          {/* Left Arrow - Moved farther away */}
          <button
            onClick={prevTestimonial}
            className="absolute left-[-80px] md:left-[-100px] text-gray-600 hover:text-amber-700 transition"
          >
            <FaChevronLeft className="text-4xl" />
          </button>

          {/* Testimonial Card */}
          <div className="w-full max-w-lg flex items-center justify-center">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={testimonials[index].id}
                className="text-center p-6 w-full bg-white flex flex-col items-center"
                variants={swipeVariants}
                initial="enter"
                animate="center"
                exit="exit"
                custom={direction}
              >
                <img
                  src={testimonials[index].image}
                  alt={testimonials[index].name}
                  className="h-20 w-20 rounded-full mx-auto border border-gray-300 shadow-sm"
                />
                <h3 className="text-lg font-semibold text-gray-800 mt-4">
                  {testimonials[index].name}
                </h3>
                <p className="text-sm text-amber-700 font-medium">{testimonials[index].role}</p>
                <p className="text-gray-600 mt-3 italic">"{testimonials[index].text}"</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow - Moved farther away */}
          <button
            onClick={nextTestimonial}
            className="absolute right-[-80px] md:right-[-100px] text-gray-600 hover:text-amber-700 transition"
          >
            <FaChevronRight className="text-4xl" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full cursor-pointer transition ${
                i === index ? "bg-amber-700" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
