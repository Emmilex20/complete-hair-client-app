import React from 'react';
import { FaStore } from "react-icons/fa";
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from 'sweetalert2';

const UpdateHair = () => {
  const item = useLoaderData();
  console.log(item);
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const navigate = useNavigate();

  // Image hosting key
  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

  const onSubmit = async (data) => {
    try {
      let imageUrl = item.imageURL;

      // Check if a new image file is provided
      if (data.imageURL[0]) {
        // Create FormData object to handle file upload
        const formData = new FormData();
        formData.append('image', data.imageURL[0]);

        // Upload image to image hosting service
        const response = await axiosPublic.post(image_hosting_api, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        // Check if image upload was successful
        if (response.data.success) {
          imageUrl = response.data.data.display_url;
        } else {
          throw new Error('Image upload failed');
        }
      }
      const formattedPrice = `₦${new Intl.NumberFormat().format(parseFloat(data.price))}`;
      const menuItem = {
        title: data.name,
        category: data.category,
        hairDescription: data.hairDescription,
        price: formattedPrice,
        imageURL: imageUrl,  // Use the new or existing image URL
      };

      // Update the hair item in the database
      const updateMenuItem = await axiosSecure.patch(`/hair/${item._id}`, menuItem);
      if (updateMenuItem) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your item has been updated successfully",
          showConfirmButton: false,
          timer: 1500
        });
        navigate("/dashboard/manage-items")
      }
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  return (
    <div className="w-full md:w-[870px] px-4 mx-auto">
      <h2 className="text-2xl font-semibold my-4">
        Update This <span className="text-blue-500">Hair Product</span>
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
              defaultValue={item.title}
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
                defaultValue={item.category}
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
                defaultValue={item.price}
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
              defaultValue={item.hairDescription}
              className="textarea textarea-bordered h-24"
              {...register("hairDescription", { required: true })}
              placeholder="Describe your Hair"
            ></textarea>
          </div>

          {/* 4th row */}
          <div className="form-control w-full my-6">
            <input
              type="file"
              {...register("imageURL")}
              className="file-input w-full"
            />
          </div>

          <button className="btn bg-blue-600 text-black hover:text-white px-6">
            Update Item <FaStore />
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateHair;
