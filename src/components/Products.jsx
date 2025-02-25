import React from "react";

const products = [
  {
    id: 1,
    name: "Glue",
    price: "$45.00",
    image: '../assets/images/The Safety Tips You Need to Know Before Cooking With Cassava.jpg',
  },
  {
    id: 2,
    name: "Cassava Leave Glue",
    price: "$20.00",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    name: "Cassava Adhesive",
    price: "$35.00",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 4,
    name: "Natural Glue",
    price: "$50.00",
    image: "https://via.placeholder.com/300",
  },
];

const Products = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white mb-5">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 "> <span className="underline decoration-amber-700 underline-offset-8">Our</span> Products</h2>
      
      {/* Product Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 hover:scale-105 transition-transform">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
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
