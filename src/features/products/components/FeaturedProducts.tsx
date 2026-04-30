import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/components/ui/carousel";
import { useGetFeaturedProducts } from "../hooks/useGetFeaturedProducts";
import { ProductCard } from "./ProductCard";
import { FeaturedProductSkeleton } from "./FeaturedProductSkeleton";
import { Product } from "../types";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function FeaturedProducts() {
  const { data: products, isLoading, isError } = useGetFeaturedProducts();
  if (isLoading) return <FeaturedProductSkeleton />;
  if (isError || !products?.length) return null;
  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-center w-full mt-10 mb-5 text-primary">
          Featured Products
        </h2>
      </div>
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full max-w-5xl mx-auto px-5"
      >
        <CarouselContent>
          {products.map((product: Product) => (
            <CarouselItem
              key={product._id}
              className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 grow"
            >
              <ProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:inline-flex" />
        <CarouselNext className="hidden sm:inline-flex" />
        <div className="flex items-center justify-center w-full gap-1 mt-2 sm:hidden">
          <ArrowLeft className="bg-primary/10 text-foreground/20 rounded-full size-8 p-2 cursor-pointer animate-pulse" />
          <ArrowRight className="bg-primary/10 text-foreground/20 rounded-full size-8 p-2 cursor-pointer animate-pulse" />
        </div>
      </Carousel>
    </>
  );
}
