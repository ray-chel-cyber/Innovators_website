import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/images/WhatsApp Image 2025-02-21 at 7.29.12 PM.jpeg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white bg-opacity-30 p-1 shadow-md w-full">
            <div className="container mx-auto flex items-center justify-between max-w-6xl">
                <div className="flex items-center">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="h-16 w-auto object-contain" />
                    </Link>
                </div>
                <div className="hidden md:flex space-x-6 text-lg font-medium">
                    <Link to="/" className="hover:underline decoration-amber-700 underline-offset-8 decoration-2 text-gray-700">Home</Link>
                    <Link to="/about" className="hover:underline decoration-amber-700 decoration-2 underline-offset-8 text-gray-700">About</Link>
                    <Link to="/shop" className="hover:underline decoration-amber-700 decoration-2 underline-offset-8 text-gray-700">Shop</Link>
                    <Link to="/blog" className="hover:underline decoration-amber-700 decoration-2 underline-offset-8 text-gray-700">Blog</Link>
                    <Link to="/contact" className="hover:underline decoration-amber-700 decoration-2 underline-offset-8 text-gray-700">Contact</Link>
                </div>
                <div className="flex items-center space-x-4">
                    <Link to="/cart">
                        <FaShoppingCart className="text-gray-700 text-xl hover:text-amber-700 transition duration-300" />
                    </Link>
                    <Link to="/SignIn">
                        <FaUser className="text-gray-700 text-xl hover:text-amber-700 transition duration-300" />
                    </Link>
                    <button className="bg-gray-700 text-white px-4 py-2 rounded-4xl text-sm font-medium hover:bg-amber-700 transition">
                        Sign Up
                    </button>
                </div>
                <button onClick={toggleMenu} className="md:hidden text-gray-700">
                    {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
                </button>
            </div>

            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white bg-opacity-30 p-4`}>
                <Link to="/" className="block py-2 text-gray-700 hover:underline">Home</Link>
                <Link to="/about" className="block py-2 text-gray-700 hover:underline">About</Link>
                <Link to="/shop" className="block py-2 text-gray-700 hover:underline">Shop</Link>
                <Link to="/blog" className="block py-2 text-gray-700 hover:underline">Blog</Link>
                <Link to="/contact" className="block py-2 text-gray-700 hover:underline">Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;
