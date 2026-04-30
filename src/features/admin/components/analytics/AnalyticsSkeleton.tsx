import { Card, CardContent, CardHeader } from "@/shared/components/ui/card";
import { Skeleton } from "@/shared/components/ui/skeleton";

export const AnalyticsSkeleton = () => {
  return (
    <div className="space-y-6 animate-pulse w-full max-w-4xl mx-auto p-4">
      {/* Cards Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i} className="border-0 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <Skeleton className="h-4 w-24 bg-muted rounded" />
              <Skeleton className="h-8 w-8 bg-muted rounded-lg" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-6 w-16 bg-muted rounded" />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Chart Skeleton */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <Skeleton className="h-6 w-48 bg-muted rounded" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-[400px] w-full bg-muted/50 rounded-xl" />
        </CardContent>
      </Card>
    </div>
  );
};
