import { useMutation } from "@tanstack/react-query";
import { login } from "../services/authApi";
import toast from "react-hot-toast";
import { useAuthStore } from "../../../shared/store/authStore";
import { useRouter } from "next/navigation";

const useLogin = () => {
  const router = useRouter();
  const setUser = useAuthStore((state) => state.setUser);
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      toast.success(data.message);
      setUser(data.user);
      router.push("/");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export default useLogin;
