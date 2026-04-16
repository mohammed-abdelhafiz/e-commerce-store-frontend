"use client";

import { Button } from "@/shared/components/ui/button";
import { LogIn, LogOut, UserPlus } from "lucide-react";
import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/shared/lib/utils";
import { useAuthStore } from "@/shared/store/authStore";
import useLogout from "@/features/auth/hooks/useLogout";
export const AuthButtons = ({
  orientation = "horizontal",
  className,
  ...props
}: ComponentProps<"div"> & {
  orientation?: "horizontal" | "vertical";
}) => {
  const user = useAuthStore((state) => state.user);
  const { mutate: logout, isPending } = useLogout();
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
          onClick={() => logout()}
          disabled={isPending}
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
