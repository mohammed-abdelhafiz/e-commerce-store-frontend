"use client";
import { motion } from "framer-motion";
import { CATEGORIES } from "@/shared/lib/constants";
import { CategoryItem } from "./CategoryItem";
import { FeaturedProducts } from "./FeaturedProducts";

export const HomePageContent = () => {
  return (
    <div className="flex flex-col gap-4 py-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold text-center text-primary"
      >
        Explore Our Categories
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-lg text-muted-foreground"
      >
        Discover the latest trends in eco-friendly fashion
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 px-4"
      >
        {CATEGORIES.map((category) => (
          <CategoryItem category={category} key={category.name} />
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FeaturedProducts />
      </motion.div>
    </div>
  );
};
