import { motion } from "motion/react";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Button } from "@/shared/components/ui/button";

export const EmptyCart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center gap-6 py-48"
    >
      <ShoppingCart className="h-16 w-16 text-muted-foreground" />
      <h2 className="text-2xl font-bold text-muted-foreground">
        Your cart is empty
      </h2>
      <p className="text-muted-foreground/70">
        Looks like you haven&apos;t added anything to your cart yet.
      </p>
      <Link href="/">
        <Button size="lg" className="font-bold">
          Start Shopping
        </Button>
      </Link>
    </motion.div>
  );
};
