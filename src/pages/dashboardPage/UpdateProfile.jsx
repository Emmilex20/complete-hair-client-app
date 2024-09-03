import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { updateUserProfile } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    const { name, photoURL } = data;
    updateUserProfile({ name, photoURL })
      .then(() => {
        alert("Profile updated successfully!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
        alert("Failed to update profile. Please try again.");
      });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-white">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="font-bold">Update Your Profile</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Enter your name"
              className="input input-bordered"
            />
            {errors.name && <span className="text-red-500">Name is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              {...register("photoURL", { required: true })}
              type="text"
              placeholder="Enter photo URL"
              className="input input-bordered"
            />
            {errors.photoURL && <span className="text-red-500">Photo URL is required</span>}
            {/* TODO: Add file upload functionality */}
            {/* <input
              type="file"
              className="file-input file-input-bordered file-input-info w-full max-w-xs"
            /> */}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
