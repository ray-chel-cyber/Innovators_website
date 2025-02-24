// 
// 
import React from 'react';
import { Link } from 'react-router-dom'; 
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import logo from '../assets/images/WhatsApp Image 2025-02-21 at 7.29.12 PM.jpeg'; 

const Navbar = ({ onSignUpClick }) => {
  return (
    <nav className="bg-white bg-opacity-30  p-2 shadow-md  w-full ">
      <div className="container mx-auto flex items-center justify-between max-w-6xl">
        
        {/* LOGO - Aligned Left */}
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-16 w-auto object-contain" />
          </Link>
        </div>

        {/* NAVIGATION LINKS - Centered */}
        <div className="hidden md:flex space-x-6 text-lg font-medium">
          <Link to="/" className="hover:underline transition text-gray-700 underline-offset-8 decoration-amber-700 decoration-2">Home</Link>
          <Link to="/about" className="hover:underline transition text-gray-700 underline-offset-8 decoration-amber-700 decoration-2">About</Link>
          <Link to="/shop" className="hover:underline transition text-gray-700 underline-offset-8 decoration-amber-700 decoration-2">Shop</Link>
          <Link to="/blog" className="hover:underline transition text-gray-700 underline-offset-8 decoration-amber-700 decoration-2">Blog</Link>
          <Link to="/contact" className="hover:underline transition text-gray-700 underline-offset-8 decoration-amber-700 decoration-2">Contact</Link>
        </div>

        {/* ICONS & SIGN IN BUTTON - Aligned Right */}
        <div className="flex items-center space-x-4">
          <Link to="/cart">
            <FaShoppingCart className="text-gray-700 hover:text-gray-500 transition text-xl" />
          </Link>
          <Link to="/SignIn">
            <FaUser className="text-gray-700 hover:text-gray-500 transition text-xl" />
          </Link>
          <button
            onClick={onSignUpClick} 
            className="bg-gray-700 text-white px-4 py-2 rounded-4xl text-sm font-medium hover:bg-gray-900 transition"
          >
            <span className='hover:text-amber-700'>Sign Up</span>
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;


