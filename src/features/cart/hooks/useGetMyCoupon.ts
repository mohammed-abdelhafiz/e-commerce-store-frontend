import { useQuery } from "@tanstack/react-query";
import { getMyCoupon } from "../services/couponApi";

export const useGetMyCoupon = () => {
  return useQuery({
    queryKey: ["my-coupon"],
    queryFn: getMyCoupon,
  });
};