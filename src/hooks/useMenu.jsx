import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useMenu = () => {
  const axiosPublic = useAxiosPublic();

  const { data: shop = [], isLoading, refetch } = useQuery({
    queryKey: ["shop"],
    queryFn: async () => {
      const res = await axiosPublic.get('/all-hairs');
      console.log(res.data); // Ensure this is what you expect
      return res.data; // Ensure this is an array
    },
  });

  return [shop, isLoading, refetch];
}

export default useMenu;
