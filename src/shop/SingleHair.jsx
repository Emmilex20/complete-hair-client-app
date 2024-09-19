import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"; // Importing cart icon
import Swal from 'sweetalert2';
import { AuthContext } from "../contexts/AuthProvider";

const SingleHair = () => {
  const hair = useLoaderData(); // useLoaderData will give you the fetched data
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleAddToCart = (hair) => {
    if (user && user?.email) {
      const { _id, title, price, imageURL } = hair;
      const cartItem = {
        menuItemId: _id,
        name: title,
        price,
        quantity: 1,
        imageURL,
        email: user.email,
      };

      fetch("https://complete-hair-client-server-3.onrender.com/carts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Added to Cart",
              showConfirmButton: false,
              timer: 1500
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please Login or Create an account to add items to cart!",
        text: "Without being logged in, you won't be able to add items to your cart. Please login",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sign-Up now!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/sign-up', { state: { from: location } });
        }
      });      
    }
  };

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
          <p className="text-2xl font-semibold text-blue-600 mb-4">Price: {hair.price}</p>
          <div
            className="prose lg:prose-lg text-gray-700 mb-6"
            dangerouslySetInnerHTML={{ __html: hair.hairDescription }}
          />
          {/* Add to Cart Button Text */}
          <button
            className="flex items-center gap-2 bg-blue-700 text-white font-semibold rounded-lg py-2 px-4 hover:bg-blue-900 transition-colors"
            aria-label="Add to cart"
            onClick={() => handleAddToCart(hair)}
          >
            <FaShoppingCart /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleHair;
