import { useMutation } from "@tanstack/react-query";
import { register } from "../services/authApi";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/shared/store/authStore";

const useRegister = () => {
  const router = useRouter();
  const setUser = useAuthStore((state) => state.setUser);
  return useMutation({
    mutationFn: register,
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

export default useRegister;
