import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_e6x82s5", 
        "template_pin47pp", 
        e.target,
        "PIigHPM78lVb0mdaK" 
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setLoading(false);
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          setLoading(false);
        }
      );

    e.target.reset(); // Reset form after submission
  };

  return (
    <motion.section id="contact" className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2 className="text-4xl font-bold text-gray-900 mb-4">
          <span className="underline decoration-green-700 underline-offset-8">Connect</span> With Us
        </motion.h2>
        <motion.p className="text-gray-600 text-lg mb-8 italic">
          Stay updated with our latest products, offers, and news. Follow us or subscribe to our newsletter.
        </motion.p>

        <motion.div className="flex justify-center space-x-6 mb-8 mt-3">
          <motion.a href="https://www.facebook.com/share/19oYoCMDr2/" target="_blank" rel="noopener noreferrer">
            <FaFacebookF size={30} className="text-gray-600 hover:text-amber-700 transition-transform transform" />
          </motion.a>
          <motion.a href="https://www.instagram.com/castechglue?igsh=MXhlNHliZmt0ZDlqbQ==" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} className="text-gray-600 hover:text-amber-700 transition-transform transform" />
          </motion.a>
          <motion.a href="https://www.tiktok.com/@budabdul?_t=ZM-8uVmD1ap0Y1&_r=1" target="_blank" rel="noopener noreferrer">
            <FaTiktok size={30} className="text-gray-600 hover:text-amber-700 transition-transform transform" />
          </motion.a>
          <motion.a href="https://wa.me/233241787585" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={30} className="text-gray-600 hover:text-amber-700 transition-transform transform" />
          </motion.a>
        </motion.div>

        <motion.div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 border-2 text-gray-600 border-gray-100 rounded-lg focus:ring-0 focus:ring-amber-700 focus:outline-none"
              required
            />
            <motion.input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border-2 text-gray-600 border-gray-100 rounded-lg focus:ring-0 focus:ring-amber-700 focus:outline-none"
              required
            />
            <motion.textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-3 border-2 text-gray-600 border-gray-100 rounded-lg focus:ring-0 focus:ring-amber-700 focus:outline-none"
              required
            ></motion.textarea>
            <motion.button
              type="submit"
              className="w-full bg-amber-700 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-all"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>

        <motion.div className="mt-8">
          <p className="text-gray-700 font-semibold text-lg">Customer Support:</p>
          <p className="text-gray-600 text-md">
            +233 24 178 7585 |{" "}
            <a href="mailto:castechgluelimited@gmail.com" className="text-green-700 hover:underline">
              castechgluelimited@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
