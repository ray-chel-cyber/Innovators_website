import React from "react";
import productImage1 from '../assets/images/Glue.jpg';
import productImage2 from '../assets/images/WhatsApp Image 2025-02-21 at 12.54.00 PM (1).jpeg';
import productImage3 from '../assets/images/Mix.jpg';
import productImage4 from '../assets/images/Flour.jpg';

const products = [
  {
    id: 1,
    name: "Glue",
    price: "$45.00",
    image: productImage1,
  },
  {
    id: 2,
    name: "Cassava Leave Glue",
    price: "$20.00",
    image: productImage2,
  },
  {
    id: 3,
    name: "Cassava Adhesive",
    price: "$35.00",
    image: productImage3,
  },
  {
    id: 4,
    name: "Natural Glue",
    price: "$50.00",
    image: productImage4,
  },
];

const Products = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white mb-5">
      <h2 className="text-4xl font-bold mb-8 text-gray-900 "> <span className="underline decoration-amber-700 underline-offset-8">Our</span> Products</h2>
      
      {/* Product Grid */}
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-6 hover:scale-105 transition-transform">
            <img src={product.image} alt={product.name} className="w-full h-60 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold flex justify-center">{product.name}</h3>
            <p className="text-amber-700 flex justify-center">{product.price}</p>
            <button className="mt-4 bg-amber-700 text-white py-2 px-4 rounded-md w-full hover:bg-gray-800 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
