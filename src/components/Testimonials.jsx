// 
import React from "react";
import { motion } from "framer-motion";
import customerImage1 from "../assets/images/6ee0de12-90de-4634-bb81-d3f9b2649d40.jpg";
import customerImage2 from "../assets/images/15faecdf-7402-4a29-845e-98c0b93f7a2e.jpg";
import customerImage3 from "../assets/images/Beauty Model Photography.jpg";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    image: customerImage1,
    text: "This product changed my life!",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: customerImage2,
    text: "Amazing quality and fantastic customer service. Highly recommend to everyone!",
  },
  {
    id: 3,
    name: "Alice Johnson",
    image: customerImage3,
    text: "A wonderful experience from start to finish. I will definitely be a returning customer.",
  },
];

// Parent container animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

// Individual card animation
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Testimonials = () => {
  return (
    <motion.section
      className="bg-white py-16 mb-2"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto text-center px-4">
        <motion.h2
          className="text-4xl font-bold text-gray-900 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="underline decoration-amber-700 underline-offset-8">
            What
          </span>{" "}
          Our Customers Say
        </motion.h2>

        <motion.div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-white p-15 max-w-sm shadow-md rounded-lg hover:shadow-lg transition-transform"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="h-21 w-20 rounded-full mx-auto border-0 border-amber-700"
              />
              <h3 className="text-lg font-semibold text-gray-800 mt-4">
                {testimonial.name}
              </h3>
              <p className="text-gray-600 mt-3 italic">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
