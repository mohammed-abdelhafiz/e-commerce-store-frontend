"use client";
import { motion } from "framer-motion";
import { OrderCard } from "./OrderCard";
import { useGetMyOrders } from "../hooks/useGetMyOrders";
import { Order } from "../types";
import { OrderCardSkeleton } from "./OrderCardSkeleton";

export const OrdersPageContent = () => {
  const { data: myOrders, isLoading, error } = useGetMyOrders();

  if (isLoading) {
    return (
      <div className="flex flex-col gap-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center text-primary"
        >
          My Orders
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-lg text-muted-foreground"
        >
          Here&apos;s a look at your orders
        </motion.p>
        <div className="flex flex-col items-center gap-4 mt-8">
          <OrderCardSkeleton />
          <OrderCardSkeleton />
        </div>
      </div>
    );
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="flex flex-col gap-4 py-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold text-center text-primary"
      >
        My Orders
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-lg text-muted-foreground"
      >
        Here&apos;s a look at your orders
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-4 mt-10 px-4 items-center justify-center"
      >
        {myOrders.map((order:Order) => (
          <OrderCard key={order._id} order={order} />
        ))}
      </motion.div>
    </div>
  );
};
