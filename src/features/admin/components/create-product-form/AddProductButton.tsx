import { Button } from "@/shared/components/ui/button";
import { AnimatePresence, motion } from "motion/react";
import { Loader2, PlusCircle } from "lucide-react";

interface AddProductButtonProps {
  isPending: boolean;
  isSubmitting: boolean;
}

export const AddProductButton = ({
  isPending,
  isSubmitting,
}: AddProductButtonProps) => {
  return (
    <Button
      type="submit"
      disabled={isPending || isSubmitting}
      className={`w-full h-10 rounded-xl text-lg font-bold transition-all duration-500 shadow-2xl relative overflow-hidden`}
    >
      <AnimatePresence mode="wait">
        {isPending || isSubmitting ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center justify-center gap-3"
          >
            <Loader2 className="animate-spin" size={24} />
            <span>Creating...</span>
          </motion.div>
        ) : (
          <motion.div
            key="idle"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center justify-center gap-1"
          >
            Create <PlusCircle size={24} />
          </motion.div>
        )}
      </AnimatePresence>
    </Button>
  );
};
