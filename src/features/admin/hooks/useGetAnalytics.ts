import { useQuery } from "@tanstack/react-query";
import { getAnalytics } from "../services/adminApi";


export const useGetAnalytics = () => {
  return useQuery({
    queryKey: ["analytics"],
    queryFn: getAnalytics,
    staleTime: 5 * 60 * 1000, //means data is fresh for 5 minutes
    gcTime: 10 * 60 * 1000, //means data will be garbage collected after 10 minutes
  });
};
