import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleHair from "../shop/SingleHair";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../dashboard/admin/Dashboard";
import UploadHair from "../dashboard/UploadHair";
import ManageHairs from "../dashboard/ManageHairs";
import EditHairs from "../dashboard/EditHairs";
import SignUp from "../components/SignUp";
import Career from "../components/Career";
import Apply from "../components/ApplyForm";
import ContactUs from "../components/ContactUs";
import Login from "../components/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
// import Logout from "../components/Logout";
import modal from "../components/Modal";
import UpdateProfile from "../pages/dashboardPage/UpdateProfile";
import CartPage from "../shop/CartPage";
import Users from "../dashboard/admin/Users";
import AddMenu from "../dashboard/admin/AddMenu";
import ManageItems from "../dashboard/admin/ManageItems";
import UpdateHair from "../dashboard/admin/UpdateHair";
import Payment from "../shop/Payment";
import Order from "../dashboard/Order";
import ManageBookings from "../dashboard/admin/ManageBookings";

const router = createBrowserRouter([
  // Main routes
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/update-profile",
        element: <UpdateProfile />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/cart-page",
        element: <CartPage />,
      },
      {
        path: "/process-checkout",
        element: <Payment />,
      },
      {
        path: "/order",
        element: <Order />
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/career",
        element: <Career />,
      },
      {
        path: "/apply",
        element: <Apply />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/hair/:id",
        element: <SingleHair />,
        loader: async ({ params }) => {
          const response = await fetch(
            `https://complete-hair-client-server-3.onrender.com/hair/${params.id}`
          );
          if (!response.ok) {
            throw new Response("Failed to fetch hair data", {
              status: response.status,
            });
          }
          return response.json();
        },
      },
    ],
  },

  // Admin Routes
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "", // This makes the path '/dashboard'
        element: <Dashboard />,
      },
      {
        path: "users", // Make this path relative to '/dashboard'
        element: <Users />,
      },
      {
        path: "add-menu",
        element: <AddMenu />,
      },
      {
        path: "manage-items",
        element: <ManageItems />,
      },
      {
        path: "update-hair/:id",
        element: <UpdateHair />,
        loader: async ({ params }) => {
          const response = await fetch(`https://complete-hair-client-server-3.onrender.com/hair/${params.id}`);
          if (!response.ok) {
            throw new Response("Failed to fetch hair data", {
              status: response.status,
            });
          }
          return response.json();
        },
      },  
      {
        path: "manage-bookings", // Make this path relative to '/dashboard'
        element: <ManageBookings />
      },  
    ],
  },
  
  {
    path: "sign-up",
    element: <SignUp />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "modal",
    element: <modal />,
  },
]);

export default router;
