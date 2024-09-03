import React, { useEffect, useState } from "react";
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
  const { user } = useAuth();
  const [cart] = useCart();

  // Toggle menu for mobile devices
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle navigation click and close the menu
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  // Handle sticky navbar on scroll
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
    <header className="max-w-screen-2xl container mx-auto w-full fixed top-0 left-0 right-0 transition-all ease-in duration-300 z-50">
      <div
        className={`navbar flex justify-between items-center px-4 lg:px-16 text-white ${
          isSticky
            ? "shadow-md bg-blue-400 text-gray-500 transition-all ease-in duration-300"
            : "bg-blue-200"
        }`}
      >
        {/* Menu toggle button for mobile devices */}
        <button className="lg:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaXmark className="h-5 w-5 text-black" />
          ) : (
            <FaBarsStaggered className="h-5 w-5 text-black" />
          )}
        </button>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-blue-700" onClick={handleNavClick}>
          <img src={logo} alt="Company Logo" className="h-12 w-auto" />
          <div className="mt-1">
            <span className="text-lg md:text-2xl font-bold">Hair Heritage</span>
            <span className="text-xs md:text-sm text-gray-500 block mt-1">
              Color Your World
            </span>
          </div>
        </Link>

        {/* Nav items for large devices */}
        <ul className="hidden lg:flex space-x-8 xl:space-x-12 text-gray-500 flex-grow justify-center">
          {navItems.map(({ link, path }) => (
            <li key={path}>
              <Link
                to={path}
                className="hover:underline hover:text-blue-700"
                onClick={handleNavClick}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Cart and User/Profile for large devices */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Cart */}
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

          {/* User/Profile */}
          {user ? (
            <Profile user={user} />
          ) : (
            <button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="btn bg-blue-500 rounded-full px-6 text-white flex items-center gap-2 border-none outline-none"
            >
              <FaUser /> Login
            </button>
          )}
        </div>
      </div>

      {/* Modal */}
      <Modal />

      {/* Nav items for medium/small devices */}
      <div
        className={`lg:hidden ${
          isMenuOpen ? "block fixed top-0 right-0 left-0 bg-blue-700" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-center py-6 space-y-4 text-white">
          {navItems.map(({ link, path }) => (
            <li key={path}>
              <Link
                to={path}
                onClick={handleNavClick}
                className="text-lg"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Cart and User/Profile for small devices */}
        <div className="flex justify-center items-center space-x-6 py-4">
          <Link to="cart-page" onClick={handleNavClick}>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle text-white relative"
            >
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
              <span className="badge badge-sm indicator-item bg-blue-500 text-white">
                {cart.length || 0}
              </span>
            </div>
          </Link>

          {user ? (
            <Profile user={user} />
          ) : (
            <button
              onClick={() => {
                handleNavClick();
                document.getElementById("my_modal_5").showModal();
              }}
              className="btn bg-blue-500 rounded-full px-6 text-white flex items-center gap-2 border-none outline-none"
            >
              <FaUser /> Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
