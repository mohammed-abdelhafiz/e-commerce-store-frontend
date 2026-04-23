import { useQuery } from "@tanstack/react-query";
import { getProductsByCategory } from "../services/productsApi";

export const useGetProductsByCategory = (category: string) => {
  return useQuery({
    queryKey: ["products", category],
    queryFn: () => getProductsByCategory(category),
  });
};
