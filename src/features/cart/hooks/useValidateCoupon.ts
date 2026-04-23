import { useMutation } from "@tanstack/react-query";
import { validateCoupon } from "../services/couponApi";
import { toast } from "react-hot-toast";

export const useValidateCoupon = () => {
  return useMutation({
    mutationFn: validateCoupon,
    onSuccess: ({coupon}) => {
      if (coupon && coupon.discountPercentage) {
        toast.success(`Coupon applied! ${coupon.discountPercentage}% off`);
      } else {
        toast.error("Invalid or expired coupon");
      }
    },
    onError: () => {
      toast.error("Invalid or expired coupon");
    },
  });
};
