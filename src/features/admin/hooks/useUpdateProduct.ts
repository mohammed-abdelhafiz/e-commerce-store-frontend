import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProduct } from "../services/adminApi";
import { toast } from "react-hot-toast";

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Product updated successfully");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to update product");
    },
  });
};
