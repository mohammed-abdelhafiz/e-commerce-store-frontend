"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ICartItem } from "../types";
import { Card, CardContent } from "@/shared/components/ui/card";
import { CartItemQuantityInput } from "./CartItemQuantityInput";
import { Loader2, Trash2 } from "lucide-react";
import { useRemoveCartItem } from "../hooks/useRemoveCartItem";
import { useUpdateCartItemQuantity } from "../hooks/useUpdateCartItemQuantity";
import { Button } from "@/shared/components/ui/button";

interface CartItemProps {
  cartItem: ICartItem;
}

export const CartItem = ({ cartItem }: CartItemProps) => {
  const { mutate: removeItem, isPending: isRemoving } = useRemoveCartItem();
  const { mutate: updateQuantity } = useUpdateCartItemQuantity();

  const handleQuantityChange = (value: number) => {
    updateQuantity({ productId: cartItem.product._id, quantity: value });
  };

  const handleRemove = () => {
    removeItem(cartItem.product._id);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <Card>
        <CardContent className="flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <div className="relative w-24 h-24 rounded-lg overflow-hidden">
              <Image
                src={cartItem.product.image.url}
                alt={cartItem.product.name}
                fill
                className="object-cover p-2 hover:scale-110 transition-transform duration-300 ease-in-out rounded-lg"
              />
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold">{cartItem.product.name}</h3>
              <p className="text-sm text-muted-foreground">
                {cartItem.product.category}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4">
              <CartItemQuantityInput
                value={cartItem.quantity}
                onValueChange={handleQuantityChange}
              />
              <span className="text-xl font-bold text-primary">
                ${(cartItem.product.price * cartItem.quantity).toFixed(2)}
              </span>
            </div>

            <Button
              onClick={handleRemove}
              disabled={isRemoving}
              variant="destructive"
              size="sm"
              className="w-fit"
              aria-label="Remove item from cart"
            >
              {isRemoving ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <Trash2 size={16} />
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
