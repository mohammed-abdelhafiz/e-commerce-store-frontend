import React from "react";
import { Category } from "../types";
import Link from "next/link";
import Image from "next/image";

interface CategoryItemProps {
  category: Category;
}

export const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
      <Link href={`/category/${category.href}`}>
        <div className="h-64 sm:h-96 overflow-hidden rounded-lg relative group">
          <Image
            src={category.imageUrl}
            alt={category.name}
            width={500}
            height={500}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="text-white text-2xl font-bold">
              {category.name}
            </span>
          </div>
        </div>
      </Link>
  );
};
