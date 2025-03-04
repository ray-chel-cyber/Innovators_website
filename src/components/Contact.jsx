import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaTwitter, FaWhatsapp } from "react-icons/fa";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const formVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="bg-white py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-900 mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={sectionVariants}
        >
          <span className="underline decoration-green-700 underline-offset-8">Connect</span> With Us
        </motion.h2>

        <motion.p
          className="text-gray-600 text-lg mb-8 italic"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Stay updated with our latest products, offers, and news. Follow us or subscribe to our newsletter.
        </motion.p>

        <motion.div
          className="flex justify-center space-x-6 mb-8 mt-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.a
            href="https://www.facebook.com/share/19oYoCMDr2/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-amber-700 transition-transform transform"
            whileHover={{ scale: 1.2, rotate: 4 }}
          >
            <FaFacebookF size={30} />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/castechglue?igsh=MXhlNHliZmt0ZDlqbQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-amber-700 transition-transform transform"
            whileHover={{ scale: 1.2, rotate: 4 }}
          >
            <FaInstagram size={30} />
          </motion.a>
          <motion.a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-amber-700 transition-transform transform"
            whileHover={{ scale: 1.2, rotate: 4 }}
          >
            <FaTiktok   size={30} />
          </motion.a>
          <motion.a
            href="https://wa.me/233241787585"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-amber-700 transition-transform transform"
            whileHover={{ scale: 1.2, rotate: 4 }}
          >
            <FaWhatsapp size={30} />
          </motion.a>
        </motion.div>

        <motion.div
          className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={formVariants}
        >
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Send Us a Message</h3>
          <form className="space-y-4">
            <motion.input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border-2 text-gray-600 border-gray-100 rounded-lg focus:ring-0 focus:ring-amber-700 focus:outline-none"
              required
              whileFocus={{ scale: 1.05 }}
            />
            <motion.input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border-2 text-gray-600 border-gray-100 rounded-lg focus:ring-0 focus:ring-amber-700 focus:outline-none"
              required
              whileFocus={{ scale: 1.05 }}
            />
            <motion.textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-3 border-2 text-gray-600 border-gray-100 rounded-lg focus:ring-0 focus:ring-amber-700 focus:outline-none"
              required
              whileFocus={{ scale: 1.05 }}
            ></motion.textarea>
            <motion.button
              type="submit"
              className="w-full bg-amber-700 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          className="mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
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
