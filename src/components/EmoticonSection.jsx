import React from "react";
import { FaLeaf, FaRecycle, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const EmoticonSection = () => {
  return (
    <motion.section
      className="bg-white py-12 mb-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl text-gray-900 font-bold mb-15"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="underline decoration-green-700 underline-offset-8">
            Our
          </span>{" "}
          Commitment
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          variants={containerVariants}
        >
         
          <motion.div className="flex flex-col items-center" variants={itemVariants}>
            <FaLeaf className="text-amber-700 text-5xl mb-2" />
            <h3 className="text-lg text-gray-900 font-semibold">Environmentally Friendly</h3>
          </motion.div>

         
          <motion.div className="flex flex-col items-center" variants={itemVariants}>
            <FaRecycle className="text-amber-700 text-5xl mb-2" />
            <h3 className="text-lg text-gray-900 font-semibold">Biodegradable</h3>
          </motion.div>

          <motion.div className="flex flex-col items-center" variants={itemVariants}>
            <FaCheckCircle className="text-amber-700 text-5xl mb-2" />
            <h3 className="text-lg text-gray-900 font-semibold">100% Effective</h3>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EmoticonSection;
