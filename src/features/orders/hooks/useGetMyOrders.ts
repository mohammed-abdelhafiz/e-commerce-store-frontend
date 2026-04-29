import { useQuery } from "@tanstack/react-query";
import { getMyOrders } from "../services/ordersApi";

export const useGetMyOrders = () => {
    return useQuery({
        queryKey: ["my-orders"],
        queryFn: getMyOrders,
    });
};