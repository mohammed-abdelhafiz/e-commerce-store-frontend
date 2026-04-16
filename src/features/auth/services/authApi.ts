import api from "@/shared/lib/axios";
import { RegisterDto } from "../schema/registerSchema";
import { LoginDto } from "../schema/loginSchema";

export const register = async (data: RegisterDto) => {
  const response = await api.post("/auth/register", data);
  return response.data;
};

export const login = async (data: LoginDto) => {
  const response = await api.post("/auth/login", data);
  return response.data;
};

export const logout = async () => {
  const response = await api.post("/auth/logout");
  return response.data;
};

export const refreshAccessToken = async () => {
  const response = await api.post("/auth/refresh-token");
  return response.data;
};

export const getMe = async () => {
  const response = await api.get("/auth/me");
  return response.data;
};