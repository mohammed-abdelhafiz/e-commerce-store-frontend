"use client";

import { motion } from "motion/react";
import { ProductsGrid } from "./ProductsGrid";

interface CategoryPageContentProps {
  categoryName: string;
}

export const CategoryPageContent = ({
  categoryName,
}: CategoryPageContentProps) => {
  const formattedCategoryName =
    categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col gap-8 py-16"
    >
      <h2 className="text-4xl font-bold text-center text-primary">
        {formattedCategoryName}
      </h2>
      <ProductsGrid categoryName={formattedCategoryName} />
    </motion.div>
  );
};
