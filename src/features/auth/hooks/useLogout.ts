import { useMutation } from "@tanstack/react-query";
import { logout } from "../services/authApi";
import toast from "react-hot-toast";
import { useAuthStore } from "../../../shared/store/authStore";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";

const useLogout = () => {
  const router = useRouter();
  const clearUser = useAuthStore((state) => state.clearUser);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: logout,
    onSuccess: (data) => {
      toast.success(data.message);
      clearUser();
      queryClient.clear();
      router.push("/");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export default useLogout;
