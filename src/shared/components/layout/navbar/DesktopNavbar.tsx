import { Button } from "@/shared/components/ui/button";
import Link from "next/link";
export const DesktopNavbar = () => {
  const navLinks = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/products",
      label: "Products",
    },
    {
      href: "/categories",
      label: "Categories",
    },
    {
      href: "/about",
      label: "About",
    },
  ];
  return (
    <nav className="hidden items-center justify-between lg:flex">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        e-commerce
      </Link>
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors duration-300 cursor-pointer"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex gap-2">
          <Button asChild variant="outline" size="sm">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/register">Register</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};
