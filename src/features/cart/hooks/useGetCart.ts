import { getCartItems } from "../services/cartApi";
import { useQuery } from "@tanstack/react-query";
import { useAuthStore } from "@/shared/store/authStore";

export const useGetCart = () => {
  const user = useAuthStore((state) => state.user);
  return useQuery({
    queryKey: ["cart"],
    queryFn: getCartItems,
    enabled: !!user,
  });
};