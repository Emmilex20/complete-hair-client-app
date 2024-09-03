import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: "https://complete-hair-client-server-3.onrender.com",
    headers: {
        'Content-Type': 'application/json',
    },  
});

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useAuth();

    axiosSecure.interceptors.request.use(config => {
        const token = localStorage.getItem("access-token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }, error => {
        return Promise.reject(error);
    });

    axiosSecure.interceptors.response.use(response => {
        return response;
    }, async error => {
        const status = error.response?.status;
        const userRole = localStorage.getItem("user-role"); // Get role from localStorage

        if (status === 401 || status === 403) {
            if (userRole === "admin") {
                // Admin should stay on the dashboard
                console.log("Admin access detected. Staying on the dashboard.");
            } else {
                // For non-admin users
                window.alert("Only Admin is Authorized");
                navigate("/"); // Redirect to home page
            }
        }
        return Promise.reject(error);
    });

    return axiosSecure;
};

export default useAxiosSecure;
