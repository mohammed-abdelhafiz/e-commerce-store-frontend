import { useQuery } from "@tanstack/react-query";
import { getFeaturedProducts } from "../services/productsApi";



export const useGetFeaturedProducts = () => {
  return useQuery({
    queryKey: ["featured-products"],
    queryFn: getFeaturedProducts,
  });
};