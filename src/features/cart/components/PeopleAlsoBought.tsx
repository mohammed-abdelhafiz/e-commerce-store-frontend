"use client";

import { motion } from "motion/react";
import { ProductCard } from "@/features/products/components/ProductCard";
import { useGetRecommendedProducts } from "../hooks/useGetRecommendedProducts";
import { Product } from "@/features/products/types";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { ProductCardSkeleton } from "@/features/products/components/ProductCardSkeleton";

export const PeopleAlsoBought = () => {
  const { data: products, isLoading } = useGetRecommendedProducts();

  if (isLoading) {
    return (
      <div className="mt-12">
        <Skeleton className="h-7 w-48 mb-6" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  if (!products || products.length === 0) return null;

  return (
    <div className="mt-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold text-primary mb-6"
      >
        People also bought
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product: Product, index: number) => (
          <motion.div
            key={product._id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
