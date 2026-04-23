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
  if (!productId?.trim()) {
    throw new Error("Product ID is required");
  }
  if (!Number.isInteger(quantity) || quantity < 1) {
    throw new Error("Quantity must be a positive integer");
  }
  const response = await api.put(`/cart/${productId}`, { quantity });
  return response.data;
};

export const clearCart = async () => {
  const response = await api.delete("/cart");
  return response.data;
};
