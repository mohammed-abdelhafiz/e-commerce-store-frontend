import { Trash2Icon } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
} from "@/shared/components/ui/alert-dialog";
import { useDeleteProduct } from "../../hooks/useDeleteProduct";
import { Product } from "@/features/products/types";

interface DeleteDialogProps {
  product: Product;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DeleteProductDialog({ product, open, onOpenChange }: DeleteDialogProps) {
  const { mutate: deleteProduct, isPending } = useDeleteProduct();
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
            <Trash2Icon />
          </AlertDialogMedia>
          <AlertDialogTitle>
            Delete &quot;{product.name}&quot; ?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete this product?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel variant="outline">Cancel</AlertDialogCancel>
          <AlertDialogAction
            variant="destructive"
            onClick={() => deleteProduct(product._id)}
            disabled={isPending}
          >
            {isPending ? "Deleting..." : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
