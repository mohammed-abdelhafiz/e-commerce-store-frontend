import Image from "next/image";

import { Button } from "@/shared/components/ui/button";
import { Card, CardContent } from "@/shared/components/ui/card";
import { Loader2, ShoppingCart } from "lucide-react";
import { Product } from "../types";
import { useAddProductToCart } from "../hooks/useAddProductToCart";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { mutate: addProductToCart, isPending } = useAddProductToCart();
  const addToCart = () => {
    addProductToCart(product._id);
  };
  return (
    <Card>
      <CardContent className="flex flex-col gap-4">
        <div className="rounded-lg relative h-48 w-full overflow-hidden">
          <Image
            src={product.image.url}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between gap-5">
            <h3 className="text-lg font-semibold truncate">{product.name}</h3>
            <span className="text-primary text-lg font-medium">
              ${product.price}
            </span>
          </div>

          <p className="text-muted-foreground/70 text-xs truncate pl-0.5 italic">
            {product.description}
          </p>
        </div>

        <Button
          className="w-full font-semibold"
          size="lg"
          onClick={addToCart}
          disabled={isPending}
        >
          {isPending ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <ShoppingCart />
          )}
          {isPending ? "Adding to Cart..." : "Add to Cart"}
        </Button>
      </CardContent>
    </Card>
  );
}
