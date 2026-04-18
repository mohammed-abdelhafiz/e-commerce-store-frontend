import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct } from "../services/adminApi";
import { toast } from "react-hot-toast";

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Product deleted successfully");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to delete product");
    },
  });
};
