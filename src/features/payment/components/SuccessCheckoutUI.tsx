"use client";
import { ArrowRight, CheckCircle, Loader2, MapPin, User, Home, Package } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { buttonVariants } from "@/shared/components/ui/button";
import { useSuccessCheckout } from "../hooks/useSuccessCheckout";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";

interface SuccessCheckoutProps {
  session_id: string;
}

export const SuccessCheckoutUI = ({ session_id }: SuccessCheckoutProps) => {
  const {
    mutate: handleSuccessCheckout,
    data,
    isSuccess,
    isPending,
    isError,
  } = useSuccessCheckout();

  const hasProcessed = useRef(false);

  useEffect(() => {
    if (session_id && !hasProcessed.current) {
      hasProcessed.current = true;
      handleSuccessCheckout(session_id);
    }
  }, [session_id, handleSuccessCheckout]);

  if (isPending) {
    return (
      <Loader2
        className="animate-spin text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        size={40}
      />
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center mt-60 text-destructive">
        Failed to process your order. Please contact support.
      </div>
    );
  }

  if (isSuccess) {
    const { newOrder, newCoupon } = data;

    return (
      <motion.main
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center gap-4 py-32"
      >
        <Card className="w-full max-w-md mx-auto">
          <CardHeader className="flex flex-col items-center justify-center pt-8 pb-2">
            <div className="flex justify-center">
              <CheckCircle className="text-primary w-16 h-16 mb-4" />
            </div>
            <CardTitle className="text-2xl font-bold text-center text-primary">
              Purchase Successful!
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <p className="text-primary text-center text-sm">
              Congratulations! Your order has been placed successfully.
            </p>

            <div className="space-y-4 pt-4 border-t border-dashed border-primary/20">
              <div className="flex items-center gap-2 text-primary">
                <MapPin className="w-5 h-5" />
                <h3 className="font-bold text-sm uppercase tracking-wider">
                  Shipping Address
                </h3>
              </div>
              <div className="bg-primary/5 rounded-xl p-4 border border-primary/10 space-y-3 text-left">
                <div className="flex items-start gap-3">
                  <User className="w-4 h-4 mt-0.5 text-primary/70" />
                  <div className="space-y-0.5">
                    <p className="text-[10px] uppercase font-bold text-primary/50 tracking-tighter">
                      Recipient
                    </p>
                    <p className="text-sm font-medium">
                      {newOrder.shippingAddress.name}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Home className="w-4 h-4 mt-0.5 text-primary/70" />
                  <div className="space-y-0.5">
                    <p className="text-[10px] uppercase font-bold text-primary/50 tracking-tighter">
                      Address
                    </p>
                    <p className="text-sm font-medium">
                      {newOrder.shippingAddress.address}
                      {newOrder.shippingAddress.apt && (
                        <span className="text-primary/70 ml-1">
                          (Apt: {newOrder.shippingAddress.apt})
                        </span>
                      )}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {newOrder.shippingAddress.city},{" "}
                      {newOrder.shippingAddress.state}{" "}
                      {newOrder.shippingAddress.zip}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-dashed border-primary/20">
              <div className="flex items-center gap-2 text-primary">
                <Package className="w-5 h-5" />
                <h3 className="font-bold text-sm uppercase tracking-wider">
                  Order Summary
                </h3>
              </div>
              <div className="flex justify-between items-center bg-primary/5 rounded-lg p-3 border border-primary/10">
                <span className="text-sm font-medium text-muted-foreground">
                  Order ID
                </span>
                <span className="text-sm font-mono font-bold text-primary">
                  #{newOrder._id.toString().slice(-8).toUpperCase()}
                </span>
              </div>
              <div className="flex justify-between items-center bg-primary/5 rounded-lg p-3 border border-primary/10">
                <span className="text-sm font-medium text-muted-foreground">
                  Total Paid
                </span>
                <span className="text-lg font-black text-primary">
                  ${newOrder.totalAmount.toFixed(2)}
                </span>
              </div>
            </div>

            {newCoupon && (
              <div className="bg-linear-to-br from-primary/10 to-primary/20 border border-primary/30 rounded-xl p-5 mt-6 space-y-3 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                  <CheckCircle size={48} />
                </div>
                <p className="text-xs text-primary font-bold uppercase tracking-[0.2em] text-center">
                  Exclusive Reward
                </p>
                <div className="flex items-center justify-center">
                  <span className="text-3xl font-black text-primary tracking-widest bg-background/50 px-4 py-1 rounded-md border border-primary/20">
                    {newCoupon.code}
                  </span>
                </div>
                <p className="text-sm text-center text-primary/80 font-medium">
                  Get <span className="text-primary font-bold">{newCoupon.discountPercentage}% OFF</span> your next order!
                </p>
              </div>
            )}
          </CardContent>

          <CardFooter className="flex flex-col items-center justify-center gap-2">
            <Link
              href="/orders"
              className={buttonVariants({
                size: "lg",
                variant: "default",
                className: "w-full",
              })}
            >
              View My Orders
            </Link>
            <Link
              href="/"
              className={buttonVariants({
                size: "lg",
                variant: "outline",
                className: "w-full",
              })}
            >
              Continue Shopping
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </CardFooter>
        </Card>
      </motion.main>
    );
  }
};
