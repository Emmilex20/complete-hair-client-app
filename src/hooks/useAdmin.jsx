import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            if (!user?.email) return false; // If user email is not available, not an admin
            const res = await axiosSecure.get(`users/admin/${user.email}`);
            return res.data?.admin || false;
        },
        enabled: !!user?.email, // Only run query if user.email is available
        retry: false // Disable retry to avoid multiple API calls
    });

    return [isAdmin, isAdminLoading];
};

export default useAdmin;
