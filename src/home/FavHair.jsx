import React from "react";
import FavHairImg from "../assets/Hair-2.jpg";
import { Link } from "react-router-dom";

const FavHair = () => {
  return (
    <div className="px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="md:w-1/2">
        <img src={FavHairImg} alt="" className="rounded md:w-10/12" />
      </div>

      <div className="md:w-1/2 space-y-6">
        <h2 className="text-5xl my-5 md:w-3/4 leading-snug font-bold text-White font-quickSand">
          Our Favorite <span className="text-blue-700">Hair Style!</span>
        </h2>
        <p className="mb-10 text-lg md:w-5/6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
          adipisci reprehenderit, sint repellendus laboriosam quasi repudiandae
          vel odio quod corporis, nostrum excepturi. Ipsa id recusandae corrupti
          nesciunt repudiandae veniam veritatis!
        </p>
        {/* Stats */}
        <div className="flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-1">
          <div>
            <h3 className="text-3x1 font-bold">800+</h3>
            <p className="text-base">Hair Listing</p>
          </div>
          <div>
            <h3 className="text-3x1 font-bold">400+</h3>
            <p className="text-base">Registered Users</p>
          </div>
          <div>
            <h3 className="text-3x1 font-bold">200+</h3>
            <p className="text-base">Sales</p>
          </div>
        </div>

        <Link to="/shop" className="mt-12 block">
          <button className="bg-blue-700 text-wite font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300 text-white">
            Explore More!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FavHair;
