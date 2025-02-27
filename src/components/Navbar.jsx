import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/images/WhatsApp Image 2025-02-21 at 7.29.12 PM.jpeg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle Scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 
            ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
            
            <div className="container mx-auto flex items-center justify-between max-w-6xl py-3 px-4">
                {/* Logo */}
                <div className="flex items-center">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="h-16 w-auto object-contain" />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-6 text-lg font-medium">
                    {["Home", "About", "Shop", "Blog", "Contact"].map((item) => (
                        <Link 
                            key={item}
                            to={`/${item.toLowerCase()}`} 
                            className={`transition duration-300 ${
                                isScrolled 
                                    ? "text-gray-700 hover:underline decoration-amber-700" 
                                    : "text-white hover:underline decoration-amber-700"
                            } underline-offset-8 decoration-2`}
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                {/* Icons and Sign Up Button */}
                <div className="flex items-center space-x-4">
                    <Link to="/cart">
                        <FaShoppingCart className={`text-xl transition duration-300 
                            ${isScrolled ? "text-gray-700 hover:text-amber-700" : "text-white hover:text-amber-700"}`} />
                    </Link>
                    <Link to="/SignIn">
                        <FaUser className={`text-xl transition duration-300 
                            ${isScrolled ? "text-gray-700 hover:text-amber-700" : "text-white hover:text-amber-700"}`} />
                    </Link>
                    <button className={`px-4 py-2 rounded-3xl text-sm font-medium transition duration-300 
                        ${isScrolled ? "bg-gray-700 text-white hover:bg-amber-700" : "bg-amber-700 text-white hover:bg-gray-700"}`}>
                        Sign Up
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button onClick={toggleMenu} className="md:hidden text-amber-700">
                    {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white p-4`}>
                {["Home", "About", "Shop", "Blog", "Contact"].map((item) => (
                    <Link key={item} to={`/${item.toLowerCase()}`} className="block py-2 text-gray-700 hover:text-amber-700 transition">
                        {item}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
