import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://complete-hair-client-server-3.onrender.com",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
