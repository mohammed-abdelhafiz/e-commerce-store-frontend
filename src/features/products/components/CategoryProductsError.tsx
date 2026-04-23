import { Button } from "@/shared/components/ui/button";

interface CategoryProductsErrorProps {
  refetch: () => void;
}
export const CategoryProductsError = ({
  refetch,
}: CategoryProductsErrorProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-30">
      <h2 className="text-2xl font-bold text-destructive italic">
        Something went wrong
      </h2>
      <p className="text-muted-foreground">
        We couldn&apos;t fetch the products for this category. Please try
        again later.
      </p>
      <Button className="w-1/6 mt-4 font-semibold" size="lg" onClick={refetch}>
        Try Again
      </Button>
    </div>
  );
};
