import { Card, CardContent, CardHeader } from "@/shared/components/ui/card";
import { Skeleton } from "@/shared/components/ui/skeleton";

export const OrderCardSkeleton = () => {
  return (
    <Card className="overflow-hidden shadow-sm w-full max-w-2xl">
      <CardHeader className="flex flex-row items-center justify-between">
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-6 w-16" />
      </CardHeader>
      <CardContent className="p-6 pt-0 space-y-4">
        <div className="flex justify-between gap-4">
          <Card className="flex-1 shadow-lg">
            <CardContent className="pt-6 space-y-2">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-24" />
            </CardContent>
          </Card>
          <Card className="flex-1 shadow-lg">
            <CardContent className="pt-6 space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-16" />
            </CardContent>
          </Card>
          <Card className="flex-1 shadow-lg">
            <CardContent className="pt-6 space-y-2">
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-4 w-12" />
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-2 gap-4 border-t pt-4">
          <div className="space-y-2">
            <Skeleton className="h-5 w-32 mb-2" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-5 w-24 mb-2" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
