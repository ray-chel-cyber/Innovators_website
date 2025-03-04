import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaTiktok, } from 'react-icons/fa';
import { FaLocationCrosshairs, FaWhatsapp } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import visaLogo from "../assets/images/visacard.png";
import mastercardLogo from "../assets/images/mas.png";
import mtnMomoLogo from "../assets/images/mtn.png";
import applePayLogo from "../assets/images/apple.png";
import airtelTigoLogo from "../assets/images/airtel-tigo.png";
import telecelCash from "../assets/images/download.png";


const Footer = () => {
  return (
    <footer className="bg-amber-700 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Cas-Tech Limited</h2>
            <p className="text-sm mb-2">
              Our mission is to deliver quality and sustainable value to our customers.
            </p>
            <p className="text-sm flex items-center mb-3">
              <FaEnvelope className="mr-1" />
              <a href="mailto:castechglue@gmail.com" className="text-white hover:underline">castechgluelimited@gmail.com</a></p>
            <p className="text-sm flex items-center mb-3">
              <FaPhone className="mr-1" />
              <a className="text-white hover:underline">+233 24 178 7585</a></p>
            <p className="text-sm flex items-center">
              <FaLocationCrosshairs className="mr-1" />
              <a className="text-white hover:underline"> Western Region, Beposo near Benyakrom Mosque</a></p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <ul className="text-sm">
            <li className="text-white hover:underline"><Link to="hero" >Home </Link></li>
              <li className="text-white hover:underline"><Link to="about" >About </Link></li>
              <li className="text-white hover:underline"><Link to="products" >Shop</Link></li>
              <li className="text-white hover:underline"><Link to="innovator" >Blog</Link></li>
              <li className="text-white hover:underline"><Link to="contact" >Contact</Link></li>
              <li className="text-white hover:underline"><Link to="/privacy" >Privacy Policy</Link></li>
              <li className="text-white hover:underline"><Link to="/terms" className="text-white hover:underline">Terms of Service</Link></li>
            </ul>
          </div>
          <div className="md:ml-0">
            <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
            <div className="flex justify-center space-x-4 mb-15">
              <a href="https://www.facebook.com/share/19oYoCMDr2/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-2xl text-white hover:text-blue-500" />
              </a>
              <a href="https://www.instagram.com/castechglue?igsh=MXhlNHliZmt0ZDlqbQ==" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl text-white hover:text-pink-500" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaTiktok className="text-2xl text-white hover:text-black" />
              </a>
              <a href="https://wa.me/233241787585" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="text-2xl text-white hover:text-green-600" />
              </a>


            </div>

           
            <div className="flex justify-center items-center mt-4 p-2 w-fit mx-auto rounded-md">
              <p className="text-sm font-semibold mr-2"> Secured by</p>
              <span className="font-bold text-black">Paystack</span>
            </div>


            <div className="flex justify-center space-x-4 mt-4">
              <img src={visaLogo} alt="Visa" className="h-8" />
              <img src={mastercardLogo} alt="Mastercard" className="h-8" />
              <img src={mtnMomoLogo} alt="MTN MoMo" className="h-8" />
              <img src={applePayLogo} alt="Apple Pay" className="h-8" />
              <img src={airtelTigoLogo} alt="AirtelTigo Money" className="h-8" />
              <img src={telecelCash} alt="Telecel Cash" className="h-8" />
            </div>

          </div>
        </div>



        <div className="mt-8 text-center">
          <h2 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <form className="flex flex-col md:flex-row justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-lg text-white border focus:outline-none"
              required
            />
            <button type="submit" className="mt-2 md:mt-0 md:ml-2 p-2 text-gray-700 bg-white rounded-md hover:bg-gray-300">
              Subscribe
            </button>
          </form>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm">&copy; {new Date().getFullYear()} Cas-Tech Glue Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
