import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"; // Importing cart icon

const SingleHair = () => {
  const hair = useLoaderData(); // useLoaderData will give you the fetched data

  return (
    <div className="mt-28 px-4 lg:px-24">
      <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg shadow-md overflow-hidden relative">
        <div className="relative">
          <img
            src={hair.imageURL}
            alt={hair.title || 'Hair image'}
            className="w-full h-auto max-h-80 object-contain"
          />
        </div>
        <div className="p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{hair.title}</h2>
          <p className="text-2xl font-semibold text-blue-600 mb-4">Price: ${hair.price}</p>
          <div
            className="prose lg:prose-lg text-gray-700 mb-6"
            dangerouslySetInnerHTML={{ __html: hair.hairDescription }}
          />
          {/* Add to Cart Button Text */}
          <button
            className="flex items-center gap-2 bg-blue-700 text-white font-semibold rounded-lg py-2 px-4 hover:bg-blue-900 transition-colors"
            aria-label="Add to cart"
          >
            <FaShoppingCart /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleHair;
