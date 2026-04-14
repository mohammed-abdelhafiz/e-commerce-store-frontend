"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { Home, ShoppingCart, Lock } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { buttonVariants } from "@/shared/components/ui/button";
import { Badge } from "@/shared/components/ui/badge";

type NavMenuProps = ComponentProps<"nav"> & {
  orientation?: "horizontal" | "vertical";
};

export const NavMenu = ({
  orientation = "horizontal",
  className,
  ...props
}: NavMenuProps) => {
  const user = false;
  const isAdmin = false;
  return (
    <nav
      className={cn(
        "flex items-center gap-4",
        orientation === "vertical" ? "flex-col" : "flex-row",
        className,
      )}
      {...props}
    >
      <Link
        href="/"
        className={cn(
          "flex items-center gap-1.5 text-sm hover:text-primary cursor-pointer",
          orientation === "vertical" ? "w-full" : "",
        )}
      >
        <Home className="h-4 w-4" />
        <span>Home</span>
      </Link>
      {user && (
        <Link
          href="/cart"
          className={cn(
            "flex items-center gap-1.5 relative text-sm hover:text-primary cursor-pointer",
            orientation === "vertical" ? "w-full" : "",
          )}
        >
          <ShoppingCart className="h-4 w-4" />
          <span>Cart</span>
          <Badge className="absolute -top-3 -left-3 p-0 h-4 w-4 flex items-center justify-center rounded-full">
            3
          </Badge>
        </Link>
      )}
      {isAdmin && (
        <Link
          href="/dashboard"
          className={buttonVariants({
            variant: "default",
            className: cn(
              "flex items-center gap-1.5 text-sm",
              orientation === "vertical" ? "w-full" : "",
            ),
          })}
        >
          <Lock className="h-4 w-4" />
          <span>Dashboard</span>
        </Link>
      )}
    </nav>
  );
};
