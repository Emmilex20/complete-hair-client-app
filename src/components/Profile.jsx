/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { RxAvatar } from "react-icons/rx";
import { AuthContext } from "../contexts/AuthProvider";
import { Link } from "react-router-dom";

const Profile = ({ user }) => {
  const { logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        alert("User signed out successfully.");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
        alert("Failed to sign out. Please try again.");
      });
  };

  return (
    <div>
      <div className="drawer drawer-end z-40">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full flex items-center justify-center overflow-hidden">
              {user.photoURL ? (
                <img
                  alt="Profile"
                  src={user.photoURL || "https://via.placeholder.com/150"}
                />
              ) : (
                <RxAvatar className="text-4xl m-auto" />
              )}
            </div>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="drawer-content flex items-center justify-center">
            <ul className="menu bg-gradient-to-r from-base-200 from-10% via-gray via-30% to-blue-400 to-90% ... text-white min-h-28 max-w-s w-auto p-4">
              {/* Sidebar content here */}
              <li>
                <a href="/update-profile">Profile</a>
              </li>
              <li>
                <a href="/order">Order</a>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
