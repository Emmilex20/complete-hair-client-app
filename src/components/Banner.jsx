import React from "react";
import BannerCard from "../home/BannerCard";

const Banner = () => {
  return (
    <div className="max-w-screen-2x1 container mx-auto px-4 lg:px-24 bg-teal-100 flex items-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 py-20 md:py-24 w-full">
        {/* Left side */}
        <div className="md:w-1/2 space-y-4 md:space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug text-black mt-20">
            Unleash Your Hair’s Full Potential
          </h2>
          <span className="text-lg md:text-xl text-gray-600">
            Discover the best hair care
          </span>
          <p className="md:w-4/5 text-sm md:text-base text-white">
            Revitalize your style with products that truly transform. Explore
            our curated collection for a look that stands out and feels amazing.
          </p>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search For a Hair...."
              className="py-2 px-4 rounded-sm outline-none border border-gray-300"
            />
            <button className="bg-blue-700 px-4 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200">
              Search
            </button>
          </div>
        </div>

        {/* Right side */}
        <div className="w-full md:w-1/2 md:ml-8">
          <BannerCard />
        </div>
      </div>
    </div>
  );
};

export default Banner;
