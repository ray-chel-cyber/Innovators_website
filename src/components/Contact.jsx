import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4"> <span className="underline decoration-amber-700 underline-offset-8"> Connect</span> With Us</h2>
        <p className="text-gray-600 text-lg mb-8 italic">
          Stay updated with our latest products, offers, and news. Follow us or subscribe to our newsletter.
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-transform transform hover:scale-110">
            <FaFacebookF size={30} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500 transition-transform transform hover:scale-110">
            <FaInstagram size={30} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-400 transition-transform transform hover:scale-110">
            <FaTwitter size={30} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700 transition-transform transform hover:scale-110">
            <FaLinkedin size={30} />
          </a>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Send Us a Message</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-700 focus:outline-none"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-700 focus:outline-none"
              required
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-700 focus:outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-amber-700 text-white py-3 rounded-lg text-lg font-semibold hover:bg-gray-700 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Customer Support Info */}
        <div className="mt-8">
          <p className="text-gray-700 font-semibold text-lg"> Customer Support:</p>
          <p className="text-gray-600 text-md">+233 24 178 7585 | castechglue@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
