import { useQuery } from "@tanstack/react-query";
import { getRecommendedProducts } from "@/features/products/services/productsApi";

export const useGetRecommendedProducts = () => {
  return useQuery({
    queryKey: ["recommendations"],
    queryFn: getRecommendedProducts,
  });
};
