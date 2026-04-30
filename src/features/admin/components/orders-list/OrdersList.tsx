import { OrdersTable } from "./OrdersTable";
import useGetOrders from "../../hooks/useGetOrders";
import { motion } from "motion/react";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { useState } from "react";

export const OrdersList = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isPlaceholderData } = useGetOrders(page);

  const orders = data?.orders || [];
  const hasNextPage = !!data?.nextPage;
  const isFetchingNextPage = isPlaceholderData;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-4xl mx-auto p-4 space-y-6"
    >
      {isLoading ? (
        <div className="p-8 space-y-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={index} className="h-10 w-full" />
          ))}
        </div>
      ) : (
        <OrdersTable
          orders={orders}
          page={page}
          setPage={setPage}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
        />
      )}
    </motion.div>
  );
};
