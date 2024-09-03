import React from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";
import Swal from 'sweetalert2';

const ManageBookings = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    refetch,
    data: orders = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await axiosSecure.get("/payments/all");
      return res.data;
    },
  });

  const handleConfirm = async (item) => {
    await axiosSecure.patch(`/payments/${item._id}`).then(res => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Payment Confirmed",
            showConfirmButton: false,
            timer: 1500
          });
        refetch();
    });
  };

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
          const response = await axiosSecure.delete(`/payments/${item._id}`);
          if (response.status === 200) {
            Swal.fire({
              title: "Deleted!",
              text: "Your payment has been deleted.",
              icon: "success"
            });
            refetch(); // Refresh the list
          }
        } catch (error) {
          Swal.fire({
            title: "Error!",
            text: "There was a problem deleting the payment.",
            icon: "error"
          });
          console.error('Error deleting payment:', error);
        }
      }
    });
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <div className="flex items-center justify-between mx-4 my-4">
        <h5>All Orders</h5>
        <h5>Total Orders: {orders.length}</h5>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table table-zebra md:w-[870px]">
          <thead className="bg-blue-900 text-white rounded-lg">
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Transaction ID</th>
              <th>Price</th>
              <th>Status</th>
              <th>Confirm Order</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.email}</td>
                <td>{item.transactionId}</td>
                <td>
                  ₦
                  {item.price.toLocaleString("en-NG", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </td>
                <td>{item.status}</td>
                <td className="text-center">
                  {item.status === "confirmed" ? (
                    "done"
                  ) : (
                    <button onClick={() => handleConfirm(item)} className="btn btn-xs bg-blue-700 text-black">
                      <GiConfirmed />
                    </button>
                  )}
                </td>
                <td>
                  <button onClick={() => handleDeleteItem(item)} className="btn btn-xs bg-red-700 text-black">
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBookings;
