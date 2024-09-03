import React, { useContext } from "react";
import useCart from "../hooks/useCart";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthProvider";
import { Link } from "react-router-dom";

const CartPage = () => {
  const [cart, refetch] = useCart();
  const { user } = useContext(AuthContext);

  // Calculate price for an individual item
  const calculatePrice = (item) => {
    const priceWithoutSymbol = parseFloat(item.price.replace(/[^\d.-]/g, ''));
    const totalPrice = priceWithoutSymbol * item.quantity;
    return totalPrice;
  };

  // Handle decrease quantity of item in cart
  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      fetch(`https://complete-hair-client-server-3.onrender.com/carts/${item._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity: item.quantity - 1 }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            refetch(); // Refetch the entire cart after updating
          }
        });
    }
  };

  // Handle increase quantity of item in cart
  const handleIncrease = (item) => {
    fetch(`https://complete-hair-client-server-3.onrender.com/carts/${item._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity: item.quantity + 1 }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch(); // Refetch the entire cart after updating
        }
      });
  };

  // Calculate total price of the cart
  const cartSubTotal = cart.reduce((total, item) => {
    return total + calculatePrice(item);
  }, 0);

  const cartTotal = cartSubTotal;

  // Function to remove item from cart
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://complete-hair-client-server-3.onrender.com/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your item has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="section-container max-w-screen-2xl mx-auto xl:px-24 px-4">
      <div className="max-w-screen-2xl container mx-auto xl:px-18">
        <div className="py-8 px-16 items-center justify-center gap-16">
          <div className="px-4 space-y-7">
            <h1 className="md:text-5xl text-4xl mt-20 font-bold text-center text-grey-500 mb-4 md:leading-snug leading-snug">
              Items Added to the <span className="text-blue-800">Cart</span>
            </h1>
          </div>

          {/* Table for Cart Items */}
          {cart.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="table bg-black rounded-lg shadow-md">
                {/* Head */}
                <thead className="bg-blue-400 text-black rounded-sm">
                  <tr>
                    <th>#</th>
                    <th>Hair</th>
                    <th>Item Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img src={item.imageURL} alt={item.name} />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="font-medium">{item.name}</td>
                      <td>
                        <div className="flex items-center">
                          <button
                            className="btn btn-xs p-2"
                            onClick={() => handleDecrease(item)}
                          >
                            -
                          </button>
                          <input
                            type="number"
                            value={item.quantity}
                            className="w-10 mx-2 text-center overflow-hidden appearance-none bg-gray-400 m-4 text-black"
                            readOnly
                          />
                          <button
                            className="btn btn-xs p-2"
                            onClick={() => handleIncrease(item)}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td>₦{calculatePrice(item).toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                      <td>
                        <button
                          className="btn btn-ghost bg-blue-200 text-black btn-xs"
                          onClick={() => handleDelete(item)}
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center mt-20">
              <p>Cart is empty. Please add products.</p>
              <Link to="/shop">
                <button className="btn bg-blue-500 text-black mt-3">
                  Back to Shop Page
                </button>
              </Link>
            </div>
          )}

          {/* Customer details */}
          {cart.length > 0 && (
            <div className="my-12 flex flex-col md:flex-row justify-between items-start">
              <div className="md:w-1/2 space-y-3">
                <h3 className="font-medium">Customer Details</h3>
                <p>Name: {user.displayName}</p>
                <p>Email: {user.email}</p>
                <p>User ID: {user.uid}</p>
              </div>
              <div className="md:w-1/2 space-y-3">
                <h3 className="font-medium">Shopping Details</h3>
                <p>Total Items: {cart.length}</p>
                <p>Total Price: ₦{cartTotal.toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                <Link to="/process-checkout">
                  <button className="btn bg-blue-400 text-white px-8 py-1 mt-5">
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
