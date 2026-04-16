import axios from "axios";
import { refreshAccessToken } from "@/features/auth/services/authApi";

const api = axios.create({
  baseURL: "/api",
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url?.includes("/auth/refresh-token") &&
      !originalRequest.url?.includes("/auth/login")
    ) {
      originalRequest._retry = true;

      try {
        await refreshAccessToken();
        return api(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    const message =
      error.response?.data?.error?.message ||
      error.response?.data?.message ||
      "Something went wrong";

    return Promise.reject(new Error(message));
  },
);

export default api;
