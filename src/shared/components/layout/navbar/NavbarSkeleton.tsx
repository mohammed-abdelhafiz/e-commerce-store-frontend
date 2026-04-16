import { Skeleton } from "@/shared/components/ui/skeleton";

export const NavbarSkeleton = () => {
  return (
    <div className="flex items-center gap-8">
      <Skeleton className="hidden md:block w-48 h-6 rounded-md" />
      <Skeleton className="w-20 h-7 rounded-md" />
    </div>
  );
};
