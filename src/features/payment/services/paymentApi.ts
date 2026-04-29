import { ICartItem } from "@/features/cart/types";
import api from "@/shared/lib/axios";

export const createStripeCheckoutSession = async (
  cartItems: ICartItem[],
  couponCode?: string,
) => {
  const items = cartItems.map(({ product, quantity }) => ({
    productId: product._id,
    quantity: quantity,
  }));
  const response = await api.post(`/payment/create-checkout-session`, {
    items,
    couponCode,
  });
  return response.data;
};

export const handleSuccessCheckout = async (session_id: string) => {
  const response = await api.post(
    `/payment/success-checkout?sessionId=${session_id}`,
  );
  return response.data;
};