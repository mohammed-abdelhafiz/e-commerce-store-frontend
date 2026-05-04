import api from "@/shared/lib/axios";

import { PaginatedResponse, Product } from "../types";

export const getProductsByCategory = async (
  category: string,
  page = 1,
  limit = 8
): Promise<PaginatedResponse<Product>> => {
  const response = await api.get(
    `/products/category/${encodeURIComponent(category)}?page=${page}&limit=${limit}`
  );
  return response.data;
};


export const addProductToCart = async (productId: string) => {
  const response = await api.post(`/cart`, { productId });
  return response.data;
};

export const getRecommendedProducts = async () => {
  const response = await api.get("/products/recommendations");
  return response.data.products;
};

export const getFeaturedProducts = async () => {
  const response = await api.get("/products/featured");
  return response.data.products;
};