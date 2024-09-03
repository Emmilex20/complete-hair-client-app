import React, { useContext, useEffect, useState } from "react";
import { Card } from "flowbite-react";
import { FaShoppingCart } from "react-icons/fa";
import { AuthContext } from "../contexts/AuthProvider";
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from "react-router-dom";

const Shop = () => {
  const [hairs, setHairs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchHairs = async () => {
      try {
        const res = await fetch("http://localhost:5000/all-hairs");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setHairs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHairs();
  }, []);

  if (loading) {
    return <div className="text-center mt-28">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-28 text-red-500">Error: {error}</div>;
  }

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

      fetch("http://localhost:5000/carts", {
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
              title: "Your work has been saved",
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
    <div className="mt-28 px-4 lg:px-24 bg-gradient-to-b from-blue-100 to-white text-gray-800 pt-16">
      <h2 className="text-5xl font-bold text-center font-quickSand">
        All Hairs are here
      </h2>

      <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {hairs.map((hair) => (
          <Card key={hair._id} className="max-w-sm relative">
            <button
              className="absolute top-2 right-2 text-blue-700 text-2xl bg-transparent border-none cursor-pointer transition-transform transform hover:scale-110 hover:text-blue-900 hover:shadow-lg"
              aria-label="Add to cart"
              onClick={() => handleAddToCart(hair)}
            >
              <FaShoppingCart />
            </button>

            <img
              src={hair.imageURL}
              alt={hair.title || "Hair image"}
              className="h-60 w-full object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {hair.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {hair.hairDescription ? hair.hairDescription.slice(0, 100) + '...' : 'No description available'}
              </p>
              <div className="mt-4 flex justify-between items-center">
                <p className="text-2xl font-bold text-amber-600 dark:text-amber-400 mt-1">
                  {hair.price}
                </p>
                <button
                  className="py-2 px-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-900"
                  onClick={() => handleAddToCart(hair)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
