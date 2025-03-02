import React from "react";
import logo from "../assets/logo.png";  // ✅ Import the logo

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-black text-white">
      {/* Logo and Name */}
      <div className="flex items-center">
      <img 
          src={logo} 
          alt="CogniTerra Logo" 
          className="h-10 w-auto mr-2 filter invert"
        />
        <span className="text-xl font-semibold italic">cogniTerra</span>
      </div>

      {/* Navigation Buttons */}
      <div className="space-x-4">
        <button className="px-4 py-2 bg-white text-black rounded-full font-semibold">LOG IN</button>
        <button className="px-4 py-2 bg-white text-black rounded-full font-semibold">SIGN UP FREE</button>
      </div>
    </nav>
  );
};

export default Navbar;
