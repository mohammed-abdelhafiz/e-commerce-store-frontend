import { CategoryItem } from "@/features/products/components/CategoryItem";
import { CATEGORIES } from "@/shared/lib/constants";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-4 py-16">
      <h2 className="text-5xl font-bold text-center text-primary">
        Explore Our Categories
      </h2>
      <p className="text-center text-lg text-muted-foreground">
        Discover the latest trends in eco-friendly fashion
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 px-4">
        {CATEGORIES.map((category) => (
          <CategoryItem category={category} key={category.name} />
        ))}
      </div>
    </div>
  );
}
