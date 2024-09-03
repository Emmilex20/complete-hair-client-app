import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { login, loginWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = async (data) => {
    try {
      const userCredential = await login(data.email, data.password);
      const user = userCredential.user;

      const userInfo = {
        name: user.displayName || "User", // Use "User" as a fallback if displayName is null
        email: user.email,
      };

      console.log("User info being sent:", userInfo); // Log user info

      // Make POST request
      await axios.post("https://complete-hair-client-server-3.onrender.com/users", userInfo);

      alert("Logged in Successfully!");
      document.getElementById("my_modal_5").close();
      navigate(from, { replace: true });
    } catch (error) {
      // Handle specific error responses
      const errorMessage = error.response?.data?.error || "Failed to log in. Please try again.";
      console.error("Error:", errorMessage);
      setError(errorMessage);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await loginWithGoogle();
      const user = result.user;

      const userInfo = {
        name: user.displayName || "User",
        email: user.email,
      };

      console.log("User info being sent:", userInfo); // Log user info

      // Make POST request
      await axios.post("https://complete-hair-client-server-3.onrender.com/users", userInfo);

      alert("Signed in successfully!");
      document.getElementById("my_modal_5").close();
      navigate(from, { replace: true });
    } catch (error) {
      const errorMessage = error.response?.data?.error || "Failed to sign in. Please try again.";
      console.error("Error:", errorMessage);
      setError(errorMessage);
    }
  };

  return (
    // <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
    //   <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    //     <div className="relative py-3 sm:max-w-xl sm:mx-auto">
    //       <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
    //       <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
    //         <div className="max-w-md mx-auto">
    //           <div className="divide-y divide-gray-200 mt-0">
    //             <form
    //               onSubmit={handleSubmit(onSubmit)}
    //               className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
    //             >
    //               <div>
    //                 <h1 className="text-2xl font-semibold">Please Log In</h1>
    //               </div>
    //               <div className="relative">
    //                 <input
    //                   {...register("email", { required: "Email is required" })}
    //                   type="text"
    //                   className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
    //                   placeholder="Email address"
    //                 />
    //                 {errors.email && <p className="text-red-600">{errors.email.message}</p>}
    //               </div>
    //               <div className="relative">
    //                 <input
    //                   {...register("password", { required: "Password is required" })}
    //                   type="password"
    //                   className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
    //                   placeholder="Password"
    //                 />
    //                 {errors.password && <p className="text-red-600">{errors.password.message}</p>}
    //               </div>
    //               {error && <p className="text-red-600 text-base">{error}</p>}
    //               <p>
    //                 If you don't have an account, please{" "}
    //                 <Link to="/sign-up" className="text-blue-600 underline">
    //                   Sign Up
    //                 </Link>{" "}
    //                 here.
    //               </p>
    //               <button
    //                 onClick={() => document.getElementById("my_modal_5").close()}
    //                 className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
    //               >
    //                 ✕
    //               </button>
    //               <div className="relative form-control mt-6">
    //                 <input
    //                   type="submit"
    //                   value="Login"
    //                   className="btn bg-blue-500 text-white rounded-md px-6 py-2"
    //                 />
    //               </div>
    //             </form>
    //           </div>
    //           <hr />
    //           <div className="flex justify-center items-center h-full mt-4 space-x-3">
    //             <button
    //               onClick={handleGoogleLogin}
    //               className="flex items-center bg-white border-2 border-blue-500 rounded-lg px-2 py-4 justify-center text-blue-500 font-medium hover:bg-gray-300 transition btn-circle"
    //             >
    //               <FcGoogle />
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </dialog>
    <div></div>
  );
};

export default Login;
