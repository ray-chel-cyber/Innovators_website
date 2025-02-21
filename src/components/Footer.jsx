import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importing social media icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Company Info</h2>
            <p className="text-sm mb-2">
              We are dedicated to providing the best products at unbeatable prices. 
              Our mission is to deliver quality and value to our customers.
            </p>
            <p className="text-sm">Contact us: support@yourcompany.com</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <ul className="text-sm">
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/shop" className="hover:underline">Shop</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
              <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-2xl hover:text-blue-500" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-2xl hover:text-blue-400" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl hover:text-pink-500" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl hover:text-blue-600" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <h2 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <form className="flex flex-col md:flex-row justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-md text-black"
              required
            />
            <button type="submit" className="mt-2 md:mt-0 md:ml-2 p-2 bg-blue-500 rounded-md hover:bg-blue-600">
              Subscribe
            </button>
          </form>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
