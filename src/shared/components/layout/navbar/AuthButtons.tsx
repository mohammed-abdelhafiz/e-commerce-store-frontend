import { Button } from "@/shared/components/ui/button";
import { LogIn, LogOut, UserPlus } from "lucide-react";
import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/shared/lib/utils";
export const AuthButtons = ({
  orientation = "horizontal",
  className,
  ...props
}: ComponentProps<"div"> & {
  orientation?: "horizontal" | "vertical";
}) => {
  const user = false;
  return (
    <div
      className={cn(
        "flex items-center gap-2",
        orientation === "vertical" ? "flex-col" : "flex-row",
        className,
      )}
      {...props}
    >
      {user ? (
        <Button
          variant="secondary"
          className={cn(orientation === "vertical" ? "w-full" : "")}
        >
          logout <LogOut className="h-4 w-4" />
        </Button>
      ) : (
        <>
          <Button
            asChild
            variant="outline"
            className={cn(orientation === "vertical" ? "w-full" : "")}
          >
            <Link href="/login">
              Login <LogIn className="h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="default"
            className={cn(orientation === "vertical" ? "w-full" : "")}
          >
            <Link href="/register">
              Register <UserPlus className="h-4 w-4" />
            </Link>
          </Button>
        </>
      )}
    </div>
  );
};
