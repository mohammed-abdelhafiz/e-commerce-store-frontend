import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeCartItem } from "../services/cartApi";
import { toast } from "react-hot-toast";

export const useRemoveCartItem = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: removeCartItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      toast.success("Item removed from cart");
    },
  });
};
