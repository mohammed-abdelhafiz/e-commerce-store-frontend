import { create } from "zustand";
import { User } from "@/shared/types";

interface AuthState {
  isLoading: boolean;
  user: User | null;
  setIsLoading: (isLoading: boolean) => void;
  setUser: (user: User | null) => void;
  clearUser: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoading: true,
  user: null,
  setUser: (user: User | null) => set({ user }),
  clearUser: () => set({ user: null }),
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
}));
