"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Loader2 } from "lucide-react";
import { useValidateCoupon } from "../hooks/useValidateCoupon";
import { ICoupon } from "../types";
import { useGetMyCoupon } from "../hooks/useGetMyCoupon";
import toast from "react-hot-toast";

interface VoucherSectionProps {
  setAppliedCoupon: (coupon: ICoupon | null) => void;
  appliedCoupon: ICoupon | null;
}

export const VoucherSection = ({
  setAppliedCoupon,
  appliedCoupon,
}: VoucherSectionProps) => {
  const { data: myCoupon } = useGetMyCoupon();
  const { mutate: validateCoupon, isPending } = useValidateCoupon();

  const [couponCode, setCouponCode] = useState("");

  const handleApplyCoupon = () => {
    if (!couponCode.trim()) return;

    validateCoupon(couponCode, {
      onSuccess: ({ coupon }) => {
        if (!coupon) {
          toast.error("Invalid or expired coupon");
          return;
        }

        setAppliedCoupon({
          code: coupon.code,
          discountPercentage: coupon.discountPercentage,
        });

        toast.success("Coupon applied successfully");
      },
      onError: () => {
        toast.error("Something went wrong");
      },
    });
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode("");
    toast.success("Coupon removed");
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 }}
      className="mt-6"
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Do you have a voucher or gift card?
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-3">
          <Input
            type="text"
            placeholder="Enter coupon code"
            className="h-10 px-4"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            disabled={!!appliedCoupon}
          />

          <Button
            className="w-full font-bold"
            size="lg"
            onClick={handleApplyCoupon}
            disabled={isPending || !!appliedCoupon || !couponCode.trim()}
          >
            {isPending ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
                Validating...
              </>
            ) : (
              "Apply Code"
            )}
          </Button>

          {/* Applied Coupon */}
          {appliedCoupon && (
            <div className="text-sm text-muted-foreground border-t border-border pt-3 mt-3 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-medium text-foreground">
                  {appliedCoupon.code} - {appliedCoupon.discountPercentage}% off
                </span>
              </div>

              <Button
                className="w-full font-bold"
                size="lg"
                variant="secondary"
                onClick={handleRemoveCoupon}
              >
                Remove Coupon
              </Button>
            </div>
          )}

          {/* Available Coupon */}
          {myCoupon && (
            <div className="mt-4 flex items-center justify-between">
              <h3 className="text-sm font-medium">Your Available Coupon:</h3>
              <p className="text-sm">
                {myCoupon.code} - {myCoupon.discountPercentage}% off
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};
