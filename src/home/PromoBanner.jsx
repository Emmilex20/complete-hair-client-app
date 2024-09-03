import React from "react";
import { Link } from "react-router-dom";
import hairPic from "../assets/Hair-4.png";
import './PromoBanner.css'; // Import the CSS file with the animation

const PromoBanner = () => {
  return (
    <div className="max-w-screen-2x1 container mx-auto relative bg-teal-100 py-16 px-4 lg:px-24 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-100 to-transparent pointer-events-none"></div>
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-black leading-tight mb-4 font-quickSand">
            Get 20% Off Your Next Purchase
          </h2>
          <p className="text-lg text-gray-700 mb-6 font-quickSand">
            Enjoy our exclusive promotional offers and save on hair care products!
          </p>
          <Link to="/shop">
            <button className="px-8 py-3 text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-800 transition-all duration-300">
              Learn More
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img 
            src={hairPic} 
            alt="Promotional Hair Product" 
            className="max-w-full h-auto max-h-100 bounce-animation rounded border-none shadow-none" 
          />
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
