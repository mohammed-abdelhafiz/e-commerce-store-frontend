import { ProductCardSkeleton } from "./ProductCardSkeleton";

export const FeaturedProductSkeleton = () => {
  return (
    <section className="space-y-6 py-8">
      <div className="flex items-center justify-between">
        <div className="h-8 w-48 bg-muted animate-pulse rounded-lg" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    </section>
  );
};