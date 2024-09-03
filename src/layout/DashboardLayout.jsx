import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { MdDashboard, MdDashboardCustomize } from "react-icons/md";
import Home from "../home/Home";
import {
  FaEdit,
  FaLocationArrow,
  FaPlusCircle,
  FaQuestionCircle,
  FaRegUser,
  FaShoppingBag,
  FaUser,
} from "react-icons/fa";
import logo from "../assets/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const sharedLinks = (
  <>
    <li className="mt-3">
      <Link to="/">
        <MdDashboard /> Home
      </Link>
    </li>
    <li>
      <Link to="/shop">
        <FaCartShopping /> Shop
      </Link>
    </li>
    <li>
      <Link to="/order">
        <FaLocationArrow /> Orders Tracking
      </Link>
    </li>
    <li>
      <Link to="/contactUs">
        <FaQuestionCircle /> Customer Support
      </Link>
    </li>
  </>
);

const DashboardLayout = () => {
  const navigate = useNavigate();
  const { loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();

  useEffect(() => {
    if (!loading && !isAdmin && !isAdminLoading) {
      window.alert("Only Admin is Authorized");
      navigate("/"); // Redirect to home page if not an admin
    }
  }, [loading, isAdmin, isAdminLoading, navigate]);

  if (loading || isAdminLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {isAdmin ? (
        <div className="flex gap-4 flex-col md:flex-row">
          <div className="drawer sm:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col sm:items-start sm:justify-start my-2">
              <div className="flex items-center justify-between mx-4">
                <label
                  htmlFor="my-drawer-2"
                  className="btn btn-primary drawer-button lg:hidden"
                >
                  <MdDashboardCustomize />
                </label>
                <button className="btn rounded-full px-6 bg-blue-800 flex items-center gap-2 sm:hidden">
                  <FaRegUser /> Logout
                </button>
              </div>
              <div className="mt-5 md:mt-2 mx-4">
                <Outlet />
              </div>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-2"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                <li>
                  <Link
                    to="/dashboard"
                    className="flex justify-start mb-3"
                    onClick={() =>
                      (document.getElementById("my-drawer-2").checked = false)
                    }
                  >
                    <img src={logo} alt="" className="w-12" />
                    <span className="badge badge-primary">Admin</span>
                  </Link>
                </li>
                <hr className="border-blue-500" />
                <li className="mt-3">
                  <Link
                    to="/dashboard"
                    onClick={() =>
                      (document.getElementById("my-drawer-2").checked = false)
                    }
                  >
                    <MdDashboard /> Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/manage-bookings"
                    onClick={() =>
                      (document.getElementById("my-drawer-2").checked = false)
                    }
                  >
                    <FaShoppingBag /> Manage Bookings
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/add-menu"
                    onClick={() =>
                      (document.getElementById("my-drawer-2").checked = false)
                    }
                  >
                    <FaPlusCircle /> Add Items
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/manage-items"
                    onClick={() =>
                      (document.getElementById("my-drawer-2").checked = false)
                    }
                  >
                    <FaEdit /> Manage Items
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to="/dashboard/users"
                    onClick={() =>
                      (document.getElementById("my-drawer-2").checked = false)
                    }
                  >
                    <FaUser /> All Users
                  </Link>
                </li>
                <hr className="border-blue-500" />
                {sharedLinks}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <Home />
      )}
    </div>
  );
};

export default DashboardLayout;
