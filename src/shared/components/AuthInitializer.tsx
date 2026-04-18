"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/shared/store/authStore";
import { useQuery } from "@tanstack/react-query";
import { getMe } from "@/features/auth/services/authApi";

export default function AuthInitializer({
  children,
}: {
  children: React.ReactNode;
}) {
  const setUser = useAuthStore((state) => state.setUser);
  const setIsLoading = useAuthStore((state) => state.setIsLoading);

  const { data, isError } = useQuery({
    queryKey: ["me"],
    queryFn: getMe,
    retry: false,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  useEffect(() => {
    if (data) {
      setUser(data.user);
      setIsLoading(false);
    } else if (isError) {
      setUser(null);
      setIsLoading(false);
    }
  }, [data, isError, setUser, setIsLoading]);

  return <>{children}</>;
}