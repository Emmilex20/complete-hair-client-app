import React from "react";
import useMenu from "../../hooks/useMenu";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from 'sweetalert2';
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ManageItems = () => {
  const [shop, isLoading, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axiosSecure.delete(`/hair/${item._id}`);
          if (response.status === 200) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            refetch(); // Refresh the list
          }
        } catch (error) {
          Swal.fire({
            title: "Error!",
            text: "There was a problem deleting the item.",
            icon: "error"
          });
          console.error('Error deleting item:', error);
        }
      }
    });
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="w-full md:w-[870px] px-4 mx-auto">
      <h2 className="text-2xl font-semibold my-4">
        Manage All <span className="text-blue-500">Hair Products</span>
      </h2>
      {/* menu item table */}
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-blue-900 text-white rounded-lg">
              <tr>
                <th>#</th>
                <th>Images</th>
                <th>Titles</th>
                <th>Prices</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {shop.map((item, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={item.imageURL} alt="" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>
                    <Link to={`/dashboard/update-hair/${item._id}`}>
                      <button className="btn btn-ghost btn-xs bg-blue-300 text-black">
                        <FaEdit />
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteItem(item)}
                      className="btn btn-ghost btn-xs bg-red-700 text-black"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
              {/* row 1 */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
