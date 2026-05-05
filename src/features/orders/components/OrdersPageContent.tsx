"use client";
import { motion } from "framer-motion";
import { OrderCard } from "./OrderCard";
import { useGetMyOrders } from "../hooks/useGetMyOrders";
import { Order } from "../types";
import { OrderCardSkeleton } from "./OrderCardSkeleton";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import Link from "next/link";

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
    return (
      <div className="flex flex-col items-center justify-center py-20 px-4">
        <h3 className="text-2xl font-bold text-destructive mb-2">
          Something went wrong
        </h3>
        <p className="text-muted-foreground text-center">
          {error.message || "Failed to fetch orders. Please try again later."}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 py-16 px-4 max-w-6xl mx-auto min-h-[70vh]">
      <div className="space-y-2 text-center mb-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-primary"
        >
          My Orders
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-muted-foreground"
        >
          Manage and track your recent purchases
        </motion.p>
      </div>

      {myOrders.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center justify-center py-20 px-4 bg-primary/5 rounded-3xl border border-dashed border-primary/20 mt-4"
        >
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <ShoppingBag className="w-12 h-12 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-primary mb-2">No orders yet</h3>
          <p className="text-muted-foreground text-center max-w-md mb-8">
            Looks like you haven&apos;t placed any orders yet. Start exploring
            our amazing collection and find something you love!
          </p>
          <Link href="/">
            <Button
              size="lg"
              className="rounded-full px-20 h-10 font-semibold text-lg"
            >
              Start Shopping
            </Button>
          </Link>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6 items-center"
        >
          {myOrders.map((order: Order) => (
            <OrderCard key={order._id} order={order} />
          ))}
        </motion.div>
      )}
    </div>
  );
};
