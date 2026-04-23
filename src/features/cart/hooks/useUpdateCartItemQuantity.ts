import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCartItemQuantity } from "../services/cartApi";

export const useUpdateCartItemQuantity = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateCartItemQuantity,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
};
