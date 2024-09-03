import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import { MdOutlineAddIcCall } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import Modal from "./Modal";
import axios from "axios";
import useAxiosPublic from "../hooks/useAxiosPublic";

const SignUp = () => {
  const { createUser, loginWithGoogle, updateUserProfile } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const axiosPublic = useAxiosPublic();

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleSignUp = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;  // Get the name from the form
    const email = form.email.value;
    const password = form.password.value;

    try {
      const userCredential = await createUser(email, password);
      const user = userCredential.user;

      // Update user profile with the name
      await updateUserProfile({ displayName: name });

      const userInfo = {
        name: name, // Use the name entered in the form
        email: user.email,
      };

      await axiosPublic.post("/users", userInfo);

      alert("Signed up successfully!");
      navigate(from, { replace: true });
    } catch (error) {
      const errorMessage = error.message;
      console.error("Error:", errorMessage);
      setError(errorMessage);
    }
  };

  // Sign up with Google
  const handleRegister = async () => {
    try {
      const result = await loginWithGoogle();
      const user = result.user;

      const userInfo = {
        name: user.displayName,  // Use displayName from Google profile
        email: user.email,
      };

      await axiosPublic.post("/users", userInfo);

      alert("Signed in successfully!");
      navigate("/");
    } catch (error) {
      const errorMessage = error.message;
      console.error("Error:", errorMessage);
      setError(errorMessage);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div className="divide-y divide-gray-200 mt-0">
                <form
                  onSubmit={handleSignUp}
                  className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
                  method="dialog"
                >
                  <div>
                    <h1 className="text-2xl font-semibold">
                      Create An Account!
                    </h1>
                  </div>
                  <div className="relative">
                    Name
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Full Name"
                    />
                    Email
                    <input
                      id="email"
                      name="email"
                      type="text"
                      className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                    />

                    {/* <label className="label mt-1">
                      <a
                        href="#"
                        className="label-text-alt link link-hover:text-blue-600 transition"
                      >
                        Forgot Password?
                      </a>
                    </label> */}
                  </div>
                  {/* {error ? (
                    <p className="text-red-600 text-base">
                      Email or Password is not correct
                    </p>
                  ) : (
                    ""
                  )} */}
                  <p>
                    If you have an acount. Please{" "}
                    <button
                      onClick={() =>
                        document.getElementById("my_modal_5").showModal()
                      }
                      className="text-blue-600 underline"
                    >
                      Login
                    </button>{" "}
                    Here
                  </p>

                  <Link
                    to="/"
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                  >
                    ✕
                  </Link>
                  <div className="relative form-control mt-6">
                    <input
                      type="submit"
                      value="Sign Up"
                      className="btn bg-blue-500 text-white rounded-md px-6 py-2"
                    />
                  </div>
                </form>
              </div>
              <hr />
              <div className="flex justify-center items-center h-full mt-4 space-x-3">
                <button
                  onClick={handleRegister}
                  className="flex items-center bg-white border-2 border-blue-500 rounded-lg px-2 py-4 justify-center text-blue-500 font-medium hover:bg-gray-300 transition btn-circle"
                >
                  <MdOutlineAddIcCall />
                </button>
                <button
                  onClick={handleRegister}
                  className="flex items-center bg-white border-2 border-blue-500 rounded-lg px-2 py-4 justify-center text-blue-500 font-medium hover:bg-gray-300 transition btn-circle"
                >
                  <FcGoogle />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal />
    </div>
  );
};

export default SignUp;
