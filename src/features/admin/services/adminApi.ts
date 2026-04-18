import api from "@/shared/lib/axios";
import { CreateProductDto } from "../schema/adminSchema";

export const createProduct = async (data: CreateProductDto) => {
  const response = await api.post("/products", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const getProducts = async ({
  page,
  limit,
}: {
  page: number;
  limit: number;
}) => {
  const response = await api.get(`/products?page=${page}&limit=${limit}`);
  return response.data;
};

export const deleteProduct = async (id: string) => {
  const response = await api.delete(`/products/${id}`);
  return response.data;
};

export const updateProduct = async ({
  id,
  data,
}: {
  id: string;
  data: Partial<CreateProductDto>;
}) => {
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    if (value !== undefined) {
      // Convert boolean to string for multipart form compatibility
      if (typeof value === "boolean") {
        formData.append(key, value.toString());
      } else {
        formData.append(key, value as string | Blob);
      }
    }
  });

  const response = await api.put(`/products/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
