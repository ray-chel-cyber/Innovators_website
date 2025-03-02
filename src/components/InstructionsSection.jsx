import React from "react";
import { motion } from "framer-motion";
import {
  FaUtensils,
  FaBalanceScale,
  FaMix,
  FaPaintBrush,
  FaClock,
} from "react-icons/fa";
import { FaBoxTissue, FaMixer, FaWeightScale } from "react-icons/fa6";

const steps = [
  {
    icon: <FaBoxTissue className="text-3xl text-green-700" />,
    title: "Step 1: Prepare",
    description:
      "Clean the surfaces where the glue is to be used.",
  },
  {
    icon: <FaBalanceScale className="text-3xl text-green-700" />,
    title: "Step 2: Measure",
    description:
      "Measure 200g of Cas-Tech glue into 1 liter.",
  },
  {
    icon: <FaMix className="text-3xl text-green-700" />,
    title: "Step 3: Mix",
    description:
      "Stir the mixture with a clean stick.",
  },
  {
    icon: <FaClock className="text-3xl text-green-700" />,
    title: "Step 4: Sitting",
    description:
      "Allow it to sit for 20 minutes.",
  },
  {
    icon: <FaPaintBrush className="text-3xl text-green-700" />,
    title: "Step 5: Application",
    description: "Apply the mixture on both surfaces",
  },
];

const InstructionsSection = () => {
  return (
    <section className="bg-amber-700 py-16 px-6 md:px-12 mt-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-10 text-white"
        >
           <span className="underline decoration-green-700 underline-offset-8"> How </span>to Use Our Product
        </motion.h2>

        <motion.ol
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {steps.map((step, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex items-start space-x-6 bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300"
            >
              <div className="p-4 bg-amber-100 rounded-full shadow-md">
                {step.icon}
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
};

export default InstructionsSection;
