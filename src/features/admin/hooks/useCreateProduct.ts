import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct } from "../services/adminApi";
import toast from "react-hot-toast";

export default function useCreateProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      toast.success("Product created successfully");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}
