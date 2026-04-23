import api from "@/shared/lib/axios";

export const getProductsByCategory = async (category: string) => {
  const response = await api.get(`/products/category/${encodeURIComponent(category)}`);
  return response.data.products;
};

export const addProductToCart = async (productId: string) => {
  const response = await api.post(`/cart`, { productId });
  return response.data;
};

export const getRecommendedProducts = async () => {
  const response = await api.get("/products/recommendations");
  return response.data.products;
};
