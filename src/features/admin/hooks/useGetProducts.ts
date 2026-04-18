import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/adminApi";

const useGetProducts = (page: number, limit: number = 5) => {
  return useQuery({
    queryKey: ["products", page],
    queryFn: () => getProducts({ page, limit }),
    placeholderData: (prev) => prev,
  });
};

export default useGetProducts;
