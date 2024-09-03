/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Table } from "flowbite-react";
import { Link } from "react-router-dom";

const ManageHairs = () => {
  const [allHairs, setAllHairs] = useState([]);
  useEffect(() => {
    fetch("https://complete-hair-client-server-3.onrender.com/all-hairs").then(res => res.json()).then(data => setAllHairs(data));
  }, [])

  // Delete a hair
  const handleDelete = (id) => {
    console.log(id);
    fetch(`https://complete-hair-client-server-3.onrender.com/hair/${id}`, {
      method: "DELETE",
    }).then(res => res.json()).then(datat => {
      alert(`Hair with ID ${id} has been deleted successfully.`)
      // setAllHairs(data);
  });
  }
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold font-quickSand">Manage Your Hair</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 lg:w-[1180px]">
          <thead className="bg-gray-50">
            <tr >
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                No.
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Hair Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Hair Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Prices
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Edit/Manage
              </th>
            </tr>
          </thead>
          {
            allHairs.map((hair, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{index + 1}.</td>
                <td className="px-6 py-4 whitespace-nowrap">{hair.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">{hair.hairDescription}</td>
                <td className="px-6 py-4 whitespace-nowrap">{hair.category}</td>
                <td className="px-6 py-4 whitespace-nowrap">{hair.price}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link to={`/admin/dashboard/edit-hairs/${hair._id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5">
                    Edit
                  </Link>
                  <button onClick={() => handleDelete(hair._id)} className="bg-red-500 font-semibold text-white rounded-sm hover:bg-sky-600 px-4 py-1">Delete</button>
                </td>
              </tr>
            ))
          }
        </table>
      </div>
  </div>
    
  );
};

export default ManageHairs;
