import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/heroimg.png";

const Hero = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-between items-center bg-[#e0fbfc] px-6 md:px-12 py-10">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-6">
        {/* Left Side: Heading & Button */}
        <div className="max-w-lg md:w-1/2">
          <h1 className="text-4xl font-bold italic leading-tight">
            Bridging Minds, <br />
            Breaking Barriers – <br />
            The Future of <br />
            Research Collaboration.
          </h1>
          <Link
            to="/signup"
            className="mt-6 inline-block bg-black text-white px-6 py-3 rounded-lg text-lg italic shadow-md hover:bg-gray-800"
          >
            JOIN FOR FREE NOW
          </Link>
        </div>

        {/* Right Side: Illustration */}
        <div className="md:w-1/2 flex justify-center">
          <img src={heroImage} alt="Hero Illustration" className="w-full max-w-sm md:max-w-md h-auto" />
        </div>
      </div>

      {/* Footer Text */}
      <div className="mt-10 text-sm italic text-center">
        <Link to="/about" className="underline">About Us</Link>
        <p className="mt-2">© Copyright CogniTerra. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Hero;
