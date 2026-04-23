import api from "@/shared/lib/axios";

export const getCartItems = async () => {
  const response = await api.get("/cart");
  return response.data;
};

export const removeCartItem = async (productId: string) => {
  const response = await api.delete(`/cart/${productId}`);
  return response.data;
};

export const updateCartItemQuantity = async ({
  productId,
  quantity,
}: {
  productId: string;
  quantity: number;
}) => {
  const response = await api.put(`/cart/${productId}`, { quantity });
  return response.data;
};

export const clearCart = async () => {
  const response = await api.delete("/cart");
  return response.data;
};
