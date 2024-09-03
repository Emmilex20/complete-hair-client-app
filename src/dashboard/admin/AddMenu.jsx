import React from "react";
import { FaStore } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from 'sweetalert2';

// Function to format the price with ₦ and commas
const formatPrice = (price) => {
  return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(price);
};

const AddMenu = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  // Image hosting key
  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

  const onSubmit = async (data) => {
    try {
      // Create FormData object to handle file upload
      const formData = new FormData();
      if (data.imageURL[0]) {
        formData.append('image', data.imageURL[0]);
      } else {
        throw new Error('No image file provided');
      }

      // Upload image to image hosting service
      const response = await axiosPublic.post(image_hosting_api, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Check if image upload was successful
      if (response.data.success) {
        const formattedPrice = new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(parseFloat(data.price));

        const menuItem = {
          title: data.name,
          category: data.category,
          hairDescription: data.hairDescription,
          price: formattedPrice,  // Price in raw form for submission
          imageURL: response.data.data.display_url,
        };

        // Handle the menu item submission (e.g., save to database)
        const postMenuItem = await axiosSecure.post("/all-hairs", menuItem);
        if (postMenuItem) {
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your item has been added successfully",
            showConfirmButton: false,
            timer: 1500
          });
        }
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div className="w-full md:w-[870px] px-4 mx-auto">
      <h2 className="text-2xl font-semibold my-4">
        Upload A New <span className="text-blue-500">Hair Product</span>
      </h2>

      {/* Form */}
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Hair Name*</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Hair Name"
              className="input input-bordered w-full"
            />
          </div>

          {/* 2nd row */}
          <div className="flex items-center gap-4">
            {/* Categories */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                {...register("category", { required: true })}
                className="select select-bordered"
                defaultValue="default"
              >
                <option disabled value="default">
                  Select a Category
                </option>
                <option value="new">New</option>
                <option value="long">Long</option>
                <option value="short">Short</option>
                <option value="curly">Curly</option>
                <option value="straight">Straight</option>
              </select>
            </div>

            {/* Prices */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="number"
                {...register("price", { required: true })}
                placeholder="Price"
                className="input input-bordered w-full"
                min="0"
                step="0.01"
              />
            </div>
          </div>

          {/* 3rd row */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Hair Details</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              {...register("hairDescription", { required: true })}
              placeholder="Describe your Hair"
            ></textarea>
          </div>

          {/* 4th row */}
          <div className="form-control w-full my-6">
            <input
              type="file"
              {...register("imageURL", { required: true })}
              className="file-input w-full"
            />
          </div>

          <button className="btn bg-blue-600 text-black hover:text-white px-6">
            Add Item <FaStore />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMenu;
