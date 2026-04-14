import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { TextAlignJustify } from "lucide-react";
import { NavMenu } from "./NavMenu";
import { AuthButtons } from "./AuthButtons";
import { ThemeToggle } from "../../ThemeToggle";
export const MobileNavbar = () => {
  return (
    <div className="md:hidden flex items-center gap-2">
      <ThemeToggle />
      <DropdownMenu>
        <DropdownMenuTrigger className="rounded-full bg-background border border-border p-2 outline-none flex items-center justify-center cursor-pointer">
          <TextAlignJustify size={20} />
          <span className="sr-only">Menu</span>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-56 mt-2 space-y-4">
          <NavMenu orientation="vertical" />
          <AuthButtons orientation="vertical" />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
