"use client";

import { useState } from "react";
import { MoreHorizontal, Pencil, Star, Trash2Icon } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { useUpdateProduct } from "../../hooks/useUpdateProduct";
import { EditProductDialog } from "./EditProductDialog";
import { DeleteProductDialog } from "./DeleteProductDialog";
import { Product } from "@/features/products/types";

interface ProductActionsProps {
  product: Product;
}

export const ProductActions = ({ product }: ProductActionsProps) => {
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const { mutate: updateProduct, isPending: isUpdating } = useUpdateProduct();

  const onToggleFeatured = () => {
    updateProduct({
      id: product._id,
      data: { isFeatured: !product.isFeatured },
    });
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => setShowEditDialog(true)}>
            <Pencil className="mr-2 h-4 w-4" />
            Update
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={onToggleFeatured}
            disabled={isUpdating}
            className="group"
          >
            <Star
              className={`mr-2 h-4 w-4 ${
                product.isFeatured
                  ? "fill-yellow-500 text-yellow-500"
                  : "group-hover:text-yellow-500 group-hover:fill-yellow-500"
              }`}
            />
            {product.isFeatured ? "Unfeature" : "Feature"}
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => setShowDeleteDialog(true)}
            className="text-destructive focus:text-destructive"
          >
            <Trash2Icon className="mr-2 h-4 w-4" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <EditProductDialog
        product={product}
        open={showEditDialog}
        onOpenChange={setShowEditDialog}
      />

      <DeleteProductDialog
        product={product}
        open={showDeleteDialog}
        onOpenChange={setShowDeleteDialog}
      />
    </>
  );
};
