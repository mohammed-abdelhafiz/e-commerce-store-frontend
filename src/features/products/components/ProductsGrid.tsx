import { ProductCard } from "./ProductCard";
import { Product } from "../types";
import { ProductsSkeleton } from "./ProductsSkeleton";
import { EmptyCategoryProducts } from "./EmptyCategoryProducts";
import { useGetProductsByCategory } from "../hooks/useGetProductsByCategory";
import { CategoryProductsError } from "./CategoryProductsError";

interface ProductsGridProps {
  categoryName: string;
}

export const ProductsGrid = ({ categoryName }: ProductsGridProps) => {
  const {
    data: products,
    isLoading,
    isError,
    refetch,
  } = useGetProductsByCategory(categoryName);

  if (isLoading) return <ProductsSkeleton />;

  if (isError) {
    return <CategoryProductsError refetch={refetch} />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {products.length === 0 ? (
        <div className="col-span-full">
          <EmptyCategoryProducts />
        </div>
      ) : (
        products.map((product: Product) => (
          <ProductCard key={product._id} product={product} />
        ))
      )}
    </div>
  );
};
