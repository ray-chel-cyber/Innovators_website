import React, { useState } from "react";
import { Link } from "react-router-dom";



const SignIn = ({ onClose, switchToSignUp }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full relative">
        <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-800" onClick={onClose}>
          &times;
        </button>
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Sign In</h2>
        <form>
          <input type="email" placeholder="Email Address" className="w-full p-2 mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500" />
          <input type="password" placeholder="Password" className="w-full p-2 mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500" />
          <button className="w-full bg-gray-700 text-white p-2 rounded-md hover:bg-gray-500 transition">Sign In</button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?
          <span className="text-gray-800 font-semibold cursor-pointer hover:underline ml-1" onClick={switchToSignUp}>Sign Up</span>
        </p>
      </div>
    </div>
  );
};



export default SignIn





