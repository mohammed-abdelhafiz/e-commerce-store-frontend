import { Card, CardContent } from "@/shared/components/ui/card";
import { Skeleton } from "@/shared/components/ui/skeleton";

export const ProductCardSkeleton = () => (
  <Card>
    <CardContent className="flex flex-col gap-4">
      <Skeleton className="rounded-lg h-48 w-full" />
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between gap-5">
          <Skeleton className="h-5 w-28" />
          <Skeleton className="h-5 w-12" />
        </div>
        <Skeleton className="h-3 w-36 mt-1" />
      </div>
      <Skeleton className="h-10 w-full rounded-md" />
    </CardContent>
  </Card>
);