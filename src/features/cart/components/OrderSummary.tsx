"use client";

import { MoveRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { ICartItem, ICoupon } from "../types";

interface OrderSummaryProps {
  cartItems: ICartItem[];
  coupon: ICoupon | null;
}

export const OrderSummary = ({ cartItems, coupon }: OrderSummaryProps) => {
  const { subtotal, total, savings } = getOrderSummary(cartItems, coupon);
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="h-fit"
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold text-primary">
            Order summary
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex justify-between text-muted-foreground">
            <span>Original price</span>
            <span className="font-semibold text-foreground">
              ${subtotal.toFixed(2)}
            </span>
          </div>

          {coupon && (
            <div className="flex justify-between text-muted-foreground">
              <span>Discount ({coupon.discountPercentage}%)</span>
              <span className="font-semibold text-primary/70">
                -${savings.toFixed(2)}
              </span>
            </div>
          )}

          <div className="pt-4 border-t border-border flex justify-between items-center">
            <span className="text-lg font-bold">Total</span>
            <span className="text-xl font-bold text-primary">
              ${total.toFixed(2)}
            </span>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full font-bold" size="lg">
            Proceed to Checkout
          </Button>

          <div className="flex items-center justify-center gap-2 text-sm">
            <span className="text-muted-foreground">or</span>
            <Link
              href="/"
              className="text-primary hover:text-primary/80 font-medium flex items-center gap-1 transition-colors group"
            >
              Continue Shopping
              <MoveRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

function getOrderSummary(cartItems: ICartItem[], coupon: ICoupon | null) {
  const subtotal = cartItems.reduce(
    (acc: number, item: ICartItem) => acc + item.product.price * item.quantity,
    0,
  );
  const savings = coupon ? subtotal * (coupon.discountPercentage / 100) : 0;
  const total = subtotal - savings;
  return { subtotal, total, savings };
}
