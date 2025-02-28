import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaUser, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/images/WhatsApp Image 2025-02-21 at 7.29.12 PM.jpeg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    
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
                
                <div className="flex items-center">
                    <ScrollLink to="hero" smooth={true} duration={500} className="cursor-pointer">
                        <img src={logo} alt="Logo" className="h-16 w-auto object-contain" />
                    </ScrollLink>
                </div>

               
                <div className="hidden md:flex space-x-6 text-lg font-medium">
                    <ScrollLink 
                        to="hero" smooth={true} duration={500} 
                        className={`cursor-pointer transition duration-300 ${
                            isScrolled ? "text-gray-700 hover:underline decoration-amber-700" 
                                      : "text-white hover:underline decoration-amber-700"
                        } underline-offset-8 decoration-2`}>
                        Home
                    </ScrollLink>
                    <ScrollLink 
                        to="about" smooth={true} duration={500} 
                        className={`cursor-pointer transition duration-300 ${
                            isScrolled ? "text-gray-700 hover:underline decoration-amber-700" 
                                      : "text-white hover:underline decoration-amber-700"
                        } underline-offset-8 decoration-2`}>
                        About
                    </ScrollLink>
                    <ScrollLink 
                        to="products" smooth={true} duration={500} 
                        className={`cursor-pointer transition duration-300 ${
                            isScrolled ? "text-gray-700 hover:underline decoration-amber-700" 
                                      : "text-white hover:underline decoration-amber-700"
                        } underline-offset-8 decoration-2`}>
                        Shop
                    </ScrollLink>
                    <ScrollLink 
                        to="innovator" smooth={true} duration={500} 
                        className={`cursor-pointer transition duration-300 ${
                            isScrolled ? "text-gray-700 hover:underline decoration-amber-700" 
                                      : "text-white hover:underline decoration-amber-700"
                        } underline-offset-8 decoration-2`}>
                        Blog
                    </ScrollLink>
                    <ScrollLink 
                        to="contact" smooth={true} duration={500} 
                        className={`cursor-pointer transition duration-300 ${
                            isScrolled ? "text-gray-700 hover:underline decoration-amber-700" 
                                      : "text-white hover:underline decoration-amber-700"
                        } underline-offset-8 decoration-2`}>
                        Contact
                    </ScrollLink>
                </div>

                
                <div className="flex items-center space-x-4">
                    <FaShoppingCart className={`text-xl transition duration-300 
                        ${isScrolled ? "text-gray-700 hover:text-amber-700" : "text-white hover:text-amber-700"}`} />
                    <FaUser className={`text-xl transition duration-300 
                        ${isScrolled ? "text-gray-700 hover:text-amber-700" : "text-white hover:text-amber-700"}`} />
                    <button className={`px-4 py-2 rounded-3xl text-sm font-medium transition duration-300 
                        ${isScrolled ? "bg-gray-700 text-white hover:bg-amber-700" : "bg-amber-700 text-white hover:bg-gray-700"}`}>
                        Sign Up
                    </button>
                </div>

                
                <button onClick={toggleMenu} className="md:hidden text-amber-700">
                    {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
                </button>
            </div>

            
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white p-4`}>
                <ScrollLink to="hero" smooth={true} duration={500} 
                    className="block py-2 text-gray-700 hover:text-amber-700 transition cursor-pointer">
                    Home
                </ScrollLink>
                <ScrollLink to="about" smooth={true} duration={500} 
                    className="block py-2 text-gray-700 hover:text-amber-700 transition cursor-pointer">
                    About
                </ScrollLink>
                <ScrollLink to="products" smooth={true} duration={500} 
                    className="block py-2 text-gray-700 hover:text-amber-700 transition cursor-pointer">
                    Shop
                </ScrollLink>
                <ScrollLink to="innovator" smooth={true} duration={500} 
                    className="block py-2 text-gray-700 hover:text-amber-700 transition cursor-pointer">
                    Blog
                </ScrollLink>
                <ScrollLink to="contact" smooth={true} duration={500} 
                    className="block py-2 text-gray-700 hover:text-amber-700 transition cursor-pointer">
                    Contact
                </ScrollLink>
            </div>
        </nav>
    );
};

export default Navbar;
