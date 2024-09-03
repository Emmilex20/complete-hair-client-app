import React from "react";
import useAuth from "../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const Order = () => {
  const { user } = useAuth();
  const token = localStorage.getItem("access-token");

  const { refetch, data: orders = [] } = useQuery({
    queryKey: ["orders", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/payments?email=${user?.email}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res.json();
    },
  });
//   console.log(orders);

const formatDate = (createdAt) => {
    const createdAtDate = new Date(createdAt);
    return createdAtDate.toLocaleDateString()
}

  return (
    <div className="section-container max-w-screen-2xl mx-auto xl:px-24 px-4">
      <div className="max-w-screen-2xl container mx-auto xl:px-18">
        <div className="py-8 px-16 items-center justify-center gap-16">
          <div className="px-4 space-y-7">
            <h1 className="md:text-5xl text-4xl mt-20 font-bold text-center text-grey-500 mb-4 md:leading-snug leading-snug">
              Track All Your <span className="text-blue-800">Orders</span>
            </h1>
          </div>
        </div>
      </div>

      <div>
        {/* Table for Cart Items */}
        {orders.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="table bg-black rounded-lg shadow-md">
              {/* Head */}
              <thead className="bg-blue-400 text-black rounded-sm">
                <tr>
                  <th>#</th>
                  <th>Order Date</th>
                  <th>Transaction ID</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                        {formatDate(item.createdAt) }
                    </td>
                    <td className="font-medium">{item.transactionId}</td>
                    <td>₦{item.price.toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                    <td>{item.status}</td>
                    <td>
                      <Link
                       to="/contactUs" className="btn btn-ghost bg-blue-200 text-black btn-xs">Contact</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Order;
