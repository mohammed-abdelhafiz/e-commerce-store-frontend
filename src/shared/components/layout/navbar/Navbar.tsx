import { MobileNavbar } from "./MobileNavbar";
import { NavMenu } from "./NavMenu";
import Link from "next/link";
import { AuthButtons } from "./AuthButtons";

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-background backdrop-blur-md shadow-lg z-40 transition-all duration-300 border-b border-primary/20">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-primary">
          <Link href="/">MoCommerce</Link>
        </h1>
        <div className="hidden md:flex items-center gap-8">
          <NavMenu />
          <AuthButtons />
        </div>
        <MobileNavbar />
      </div>
    </header>
  );
};
