"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { Home, ShoppingCart, Lock } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { buttonVariants } from "@/shared/components/ui/button";
import { Badge } from "@/shared/components/ui/badge";
import { useAuthStore } from "@/shared/store/authStore";
import { usePathname } from "next/navigation";
import { useGetCartCount } from "@/features/cart/hooks/useGetCartCount";

type NavMenuProps = ComponentProps<"nav"> & {
  orientation?: "horizontal" | "vertical";
};

export const NavMenu = ({
  orientation = "horizontal",
  className,
  ...props
}: NavMenuProps) => {
  const pathname = usePathname();
  const user = useAuthStore((state) => state.user);
  const isAdmin = user?.role === "admin";
  const cartCount = useGetCartCount();
  return (
    <nav
      className={cn(
        "flex items-center gap-6",
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
          pathname === "/" ? "text-primary" : "",
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
            pathname === "/cart" ? "text-primary" : "",
          )}
        >
          <ShoppingCart className="h-4 w-4" />
          <span>Cart</span>
          <Badge className="hidden md:flex absolute -top-3 -left-3 h-4 w-4 items-center justify-center rounded-full">
            {cartCount}
          </Badge>
        </Link>
      )}
      {isAdmin && (
        <Link
          href="/admin"
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
