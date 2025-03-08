import React from "react";
import { motion } from "framer-motion";
import productImage1 from "../assets/images/CassavaImage.png";
import productImage2 from "../assets/images/Product1.png";
import productImage3 from "../assets/images/Product2.png";
import productImage4 from "../assets/images/Product3.png";

const products = [
  { id: 1, name: "General Paper Glue", price: "GH₵20.00", image: productImage1, link:"https://paystack.com/buy/general-purpose-glue-oxxznj" },
  { id: 2, name: "Wood Glue", price: "GH₵20.00", image: productImage2, link: "https://paystack.com/buy/cas-tech-glue-efovpo" },
  { id: 3, name: "Acrylic-Paint Glue", price: "GH₵20.00", image: productImage3, link: "https://paystack.com/buy/natural-glue-kxxhoq" },
  { id: 4, name: "Natural Glue", price: "GH₵20.00", image: productImage4, link: "https://paystack.com/buy/wood-adhesive-xdsggp" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const productVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Products = () => {
  return (
    <motion.div
      id="products"
      className="max-w-6xl mx-auto p-6 bg-white mb-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <h2 className="text-4xl font-bold mb-8 text-gray-900">
        <span className="underline decoration-green-700 underline-offset-8">
          Our
        </span>{" "}
        Products
      </h2>

      <motion.div
        className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        variants={containerVariants}
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white p-6 hover:scale-105 transition-transform rounded-lg shadow-md"
            variants={productVariants}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-60 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold flex justify-center">
              {product.name}
            </h3>
            <p className="text-amber-700 flex justify-center">{product.price}</p>

            {product.link ? (
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-green-700 text-white py-2 px-4 rounded-md w-full block text-center hover:bg-amber-800 transition"
              >
                Add to Cart
              </a>
            ) : (
              <button className="mt-4 bg-green-700 text-white py-2 px-4 rounded-md w-full hover:bg-amber-800 transition">
                Add to Cart
              </button>
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Products;
