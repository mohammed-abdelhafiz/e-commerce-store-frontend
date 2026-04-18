import { CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Sparkles } from "lucide-react";

export const CreateProductFormHeader = () => {
  return (
    <CardHeader className="flex flex-col items-center justify-center">
      <CardTitle className="text-2xl font-extrabold tracking-tight flex items-center gap-2">
        Add New Product
        <Sparkles className="text-primary w-5 h-5 animate-pulse" />
      </CardTitle>
      <CardDescription className="text-sm font-medium text-muted-foreground/70">
        Craft your next bestseller with detailed information.
      </CardDescription>
    </CardHeader>
  );
};
