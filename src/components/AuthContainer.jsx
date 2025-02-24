import React, { useState } from "react";
import Navbar from "./Navbar"; // Import Navbar
import AuthPopup from "./AuthPopup"; // Import Popup


const AuthContainer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
  
    const toggleAuthMode = () => {
      setIsSignUp((prev) => !prev); // Toggle between Sign In and Sign Up
    };
  
    return (
      <div>
        <Navbar
          onSignUpClick={() => {
            setIsSignUp(true);
            setIsOpen(true);
          }}
        />
        <AuthPopup
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          isSignUp={isSignUp}
          toggleAuthMode={toggleAuthMode}
        />
      </div>
    );
  };
  
  export default AuthContainer;