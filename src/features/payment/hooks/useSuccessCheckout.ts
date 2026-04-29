import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useClearCart } from "../../cart/hooks/useClearCart";
import { handleSuccessCheckout } from "../services/paymentApi";

export const useSuccessCheckout = () => {
  const { mutate: clearCart } = useClearCart();

  return useMutation({
    mutationFn: handleSuccessCheckout,

    onSuccess: () => {
      toast.success("Order created successfully");
      clearCart();
    },
    onError: (error) => {
      console.log(error);
      toast.error("Something went wrong. Please contact support.");
    },
  });
};
