"use client";

import { useState } from "react";
import { CartItem } from "./CartItem";
import { OrderSummary } from "./OrderSummary";
import { VoucherSection } from "./VoucherSection";
import { PeopleAlsoBought } from "./PeopleAlsoBought";
import { useGetCart } from "../hooks/useGetCart";
import { ICartItem, ICoupon } from "../types";
import { CartSkeleton } from "./CartSkeleton";
import { EmptyCart } from "./EmptyCart";

export const CartPageContent = () => {
  const { data: cart, isLoading, isPending } = useGetCart();
  const [appliedCoupon, setAppliedCoupon] = useState<ICoupon | null>(null);

  if (isLoading || isPending) {
    return <CartSkeleton />;
  }

  const cartItems: ICartItem[] = (cart?.items || []).filter(
    (item: ICartItem) => item.product != null,
  );

  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 py-12">
      {/* Left Side: Cart Items & Recommendations */}
      <div className="lg:col-span-8">
        <div className="space-y-4">
          {cartItems.map((item: ICartItem) => (
            <CartItem key={item._id} cartItem={item} />
          ))}
        </div>
        <PeopleAlsoBought />
      </div>

      {/* Right Side: Summary & Voucher */}
      <div className="lg:col-span-4">
        <OrderSummary cartItems={cartItems} coupon={appliedCoupon} />
        <VoucherSection
          setAppliedCoupon={setAppliedCoupon}
          appliedCoupon={appliedCoupon}
        />
      </div>
    </div>
  );
};
