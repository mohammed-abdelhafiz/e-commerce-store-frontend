import api from "@/shared/lib/axios";

export const getMyCoupon = async () => {
  const response = await api.get(`/coupons/my-coupon`);
  return response.data.myCoupon;
};

export const validateCoupon = async (code: string) => {
  const response = await api.post(`/coupons/validate/${encodeURIComponent(code)}`);
  return response.data;
};
