import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarClick = () => {
    setIsSidebarOpen(false);
  };

  const sidebarItems = [
    { link: "Dashboard", path: "/dashboard" },
    { link: "Orders", path: "/orders" },
    { link: "Products", path: "/products" },
    { link: "Customers", path: "/customers" },
  ];

  return (
    <div>
      <button onClick={toggleSidebar} className="p-2 text-2xl text-white bg-blue-500 lg:hidden">
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      <aside className="hidden lg:block fixed top-0 left-0 w-64 h-screen bg-blue-700 text-white z-30">
        <ul className="space-y-6 p-6">
          {sidebarItems.map(({ link, path }) => (
            <li key={path}>
              <Link to={path} className="block p-4 hover:bg-blue-500">
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      <div
        className={`fixed top-0 left-0 bg-blue-700 w-64 h-full p-6 z-50 transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <ul className="space-y-4 text-white text-lg">
          {sidebarItems.map(({ link, path }) => (
            <li key={path}>
              <Link to={path} onClick={handleSidebarClick}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={handleSidebarClick}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
