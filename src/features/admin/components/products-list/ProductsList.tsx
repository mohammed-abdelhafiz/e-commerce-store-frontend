
import { ProductsTable } from "./ProductsTable";
import useGetProducts from "../../hooks/useGetProducts";
import { motion } from "motion/react";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { useState } from "react";

export const ProductsList = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isPlaceholderData } = useGetProducts(page);

  const products = data?.products || [];
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
        <ProductsTable
          products={products}
          page={page}
          setPage={setPage}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
        />
      )}
    </motion.div>
  );
};
