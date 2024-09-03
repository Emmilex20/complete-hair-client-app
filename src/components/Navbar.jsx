import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaUser } from "react-icons/fa";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import Modal from "./Modal";
import Profile from "./Profile";
import useCart from "../hooks/useCart";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const {user, loading} = useAuth();
  // console.log(user);

  const [cart, refetchCart] = useCart();
  // console.log(cart)

  // Toggle menu for mobile devices
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Blog", path: "/blog" },
  ];

  return (
    <header className="max-w-screen-2x1 container mx-auto w-full fixed top-0 left-0 right-0 transition-all ease-in duration-300">
      <div
        className={`navbar bg-blue-200 flex justify-between items-center px-4 lg:px-16 text-white ${
          isSticky
            ? "shadow-md bg-blue-400 text-gray-500 transition-all ease-in duration-300"
            : ""
        }`}
      >
        {/* Menu toggle button for mobile devices */}
        <button className="btn btn-ghost lg:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaXmark className="h-5 w-5 text-black" />
          ) : (
            <FaBarsStaggered className="h-5 w-5 text-black" />
          )}
        </button>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-blue-700">
          <img src={logo} alt="Company Logo" className="h-16 w-auto" />
          <div className="mt-2">
            <span className="text-2xl font-bold">Hair Heritage</span>
            <span className="text-sm text-gray-500 block mt-1">
              Color Your World
            </span>
          </div>
        </Link>

        {/* Nav items for large devices */}
        <ul className="md:flex space-x-12 hidden text-gray-500 flex-grow justify-center">
          {navItems.map(({ link, path }) => (
            <li key={path}>
              <Link to={path} className="hover:underline hover:text-blue-700">
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact Button for large devices */}
        <div className="lg:flex">
          {/* Cart for large devices */}
          <Link to="cart-page">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle text-gray-500 mr-3 lg:flex hidden items-center justify-center"
          >
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">{cart.length || 0}</span>
            </div>
          </div>
          </Link>


          {/* Contact Button for large devices */}
         {
          user? <Profile user={user}/> :  <button
          onClick={() => document.getElementById("my_modal_5").showModal()}
          className="btn bg-blue-500 rounded-full px-6 text-white flex items-center gap-2 border-none outline-none"
        >
          <FaUser /> Login
        </button>
         }
        </div>
      </div>
          <Modal />
      {/* Button for lg devices */}
      <div className="space-x-12 hidden lg:flex items-center">
        <button>
          <FaBarsStaggered className="w-5 hover:text-blue-700 hidden" />
        </button>
      </div>

      {/* Menu button for mobile devices */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-black focus:outline-none">
          {isMenuOpen ? (
            <FaXmark className="h-5 w-5 text-black hidden" />
          ) : (
            <FaBarsStaggered className="h-5 w-5 text-black hidden" />
          )}
        </button>
      </div>

      {/* NavItems for small devices */}
      <div
        className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${
          isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
        }`}
      >
        <ul
          className={`flex flex-col items-center gap-4 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <li key={path}>
              <Link
                to={path}
                className="block text-base text-white hover:underline"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
