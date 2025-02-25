import React from "react";

const products = [
  {
    id: 1,
    name: "Cozy Handmade Sweater",
    price: "$45.00",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    name: "Chunky Knit Beanie",
    price: "$20.00",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    name: "Handcrafted Wool Scarf",
    price: "$35.00",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 4,
    name: "Boho Crochet Bag",
    price: "$50.00",
    image: "https://via.placeholder.com/300",
  },
];

const Products = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white mb-10">
      <h2 className="text-3xl font-bold mb-8 "> <span className="underline decoration-amber-700 underline-offset-8">Our</span> Products</h2>
      
      {/* Product Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4  hover:scale-105 transition-transform">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold flex justify-center">{product.name}</h3>
            <p className="text-gray-600 flex justify-center">{product.price}</p>
            <button className="mt-4 bg-gray-700 text-white py-2 px-4 rounded-md w-full hover:bg-gray-500 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
