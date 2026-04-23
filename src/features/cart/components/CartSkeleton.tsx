import { Card, CardContent, CardHeader, CardFooter } from "@/shared/components/ui/card";
import { Skeleton } from "@/shared/components/ui/skeleton";

const CartItemSkeleton = () => (
  <Card>
    <CardContent className="flex items-center justify-between p-4">
      <div className="flex items-center gap-4">
        <Skeleton className="w-24 h-24 rounded-lg" />
        <div className="flex flex-col gap-2">
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-4 w-20" />
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4">
          <Skeleton className="h-9 w-24 rounded-md" />
          <Skeleton className="h-6 w-16" />
        </div>
        <Skeleton className="h-8 w-8 rounded-md" />
      </div>
    </CardContent>
  </Card>
);

const OrderSummarySkeleton = () => (
  <Card>
    <CardHeader>
      <Skeleton className="h-6 w-36" />
    </CardHeader>

    <CardContent className="space-y-4">
      <div className="flex justify-between">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-16" />
      </div>
      <div className="pt-4 border-t border-border flex justify-between items-center">
        <Skeleton className="h-5 w-12" />
        <Skeleton className="h-6 w-20" />
      </div>
    </CardContent>

    <CardFooter className="flex flex-col gap-4">
      <Skeleton className="h-10 w-full rounded-md" />
      <Skeleton className="h-4 w-36 mx-auto" />
    </CardFooter>
  </Card>
);

const VoucherSkeleton = () => (
  <Card className="mt-6">
    <CardHeader>
      <Skeleton className="h-4 w-52" />
    </CardHeader>

    <CardContent className="space-y-3">
      <Skeleton className="h-10 w-full rounded-md" />
      <Skeleton className="h-10 w-full rounded-md" />
    </CardContent>
  </Card>
);

export const CartSkeleton = () => {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 py-12">
      <div className="lg:col-span-8">
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <CartItemSkeleton key={i} />
          ))}
        </div>
      </div>

      <div className="lg:col-span-4">
        <OrderSummarySkeleton />
        <VoucherSkeleton />
      </div>
    </div>
  );
};
