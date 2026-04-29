import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../services/adminApi";

const useGetOrders = (page: number, limit: number = 5) => {
  return useQuery({
    queryKey: ["orders", page],
    queryFn: () => getOrders({ page, limit }),
    placeholderData: (prev) => prev,
  });
};

export default useGetOrders;
