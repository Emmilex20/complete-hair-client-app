import React from 'react';
import { FaTrashAlt, FaUsers } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const Users = () => {
  const axiosSecure = useAxiosSecure();
  const {
    refetch,
    data: users = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users');
      return res.data;
    },
  });

  const handleMakeAdmin = async (user) => {
    try {
      await axiosSecure.patch(`/users/admin/${user._id}`);
      alert(`User ${user.name} has been made an admin.`);
      refetch();
    } catch (err) {
      console.error('Error making user admin:', err);
      alert('Failed to make user admin.');
    }
  };

  const handleDeleteUser = async (user) => {
    try {
      await axiosSecure.delete(`/users/${user._id}`);
      alert(`User ${user.name} has been deleted.`);
      refetch();
    } catch (err) {
      console.error('Error deleting user:', err);
      alert('Failed to delete user.');
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <div className="flex items-center justify-between mx-4 my-4">
        <h5>All Users</h5>
        <h5>Total Users: {users.length}</h5>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table table-zebra md:w-[870px]">
          <thead className="bg-blue-900 text-white rounded-lg">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === 'admin' ? (
                    'Admin'
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-xs btn-circle bg-slate-400 text-black"
                    >
                      <FaUsers />
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="btn btn-xs bg-red-700 text-black"
                  >
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

export default Users;
