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
    text: "This product changed my life! Definately using it more frequently",
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

const Testimonials = () => {
  return (
    <section className="bg-white py-12 flex justify-center">
      <div className="container mx-auto text-center max-w-5xl">
        <h2 className="text-4xl font-bold mb-10 text-gray-900"> <span className="underline decoration-amber-700 underline-offset-8">What</span> Our Customers Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col items-center text-center mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-24 w-24 rounded-full overflow-hidden mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="h-full w-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              <p className="text-gray-600 mt-2 italic">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
