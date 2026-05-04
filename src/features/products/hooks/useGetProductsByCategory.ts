import { useQuery } from "@tanstack/react-query";
import { getProductsByCategory } from "../services/productsApi";

export const useGetProductsByCategory = (
  category: string,
  page = 1,
  limit = 8
) => {
  return useQuery({
    queryKey: ["products", category, page, limit],
    queryFn: () => getProductsByCategory(category, page, limit),
  });
};

