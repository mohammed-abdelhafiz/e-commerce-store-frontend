import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProductToCart } from "../services/productsApi";
import { toast } from "react-hot-toast";

export const useAddProductToCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addProductToCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      toast.success("Product added to cart");
    },
  });
};
