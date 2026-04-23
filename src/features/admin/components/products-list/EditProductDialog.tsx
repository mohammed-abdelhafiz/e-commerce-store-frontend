"use client";

import React, { useEffect, useState, ChangeEvent } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/shared/components/ui/dialog";
import { FormField } from "@/shared/components/FormField";
import { Button } from "@/shared/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";

import { useUpdateProduct } from "../../hooks/useUpdateProduct";
import { Category, Product } from "@/features/products/types";
import {
  UpdateProductDto,
  UpdateProductSchema,
} from "../../schema/adminSchema";
import { CATEGORIES } from "@/shared/lib/constants";

interface EditProductDialogProps {
  product: Product;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const EditProductDialog = ({
  product,
  open,
  onOpenChange,
}: EditProductDialogProps) => {
  const [imagePreview, setImagePreview] = useState<string | null>(
    product.image?.url || null,
  );

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<UpdateProductDto>({
    resolver: zodResolver(UpdateProductSchema),
    defaultValues: {
      name: product.name,
      price: product.price.toString(),
      category: product.category,
    },
  });

  useEffect(() => {
    if (open) {
      reset({
        name: product.name,
        price: product.price.toString(),
        category: product.category,
      });
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setImagePreview(product.image?.url || null);
    }
  }, [product, open, reset]);

  const { mutateAsync: updateProduct, isPending } = useUpdateProduct();

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("image", file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data: UpdateProductDto) => {
    await updateProduct({ id: product._id, data });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Update Product</DialogTitle>
          <DialogDescription>
            Modify the details for &quot;{product.name}&quot;. Click save to
            apply changes.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pt-2">
          <div className="flex items-center gap-4">
            <div className="relative h-20 w-20 rounded-lg overflow-hidden border border-slate-700 bg-slate-800 shrink-0">
              {imagePreview ? (
                <Image
                  src={imagePreview}
                  alt="Preview"
                  fill
                  className="object-cover"
                  unoptimized
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center text-slate-500 text-xs">
                  No Image
                </div>
              )}
            </div>
            <div className="flex-1 space-y-1">
              <label className="text-sm font-medium">Product Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full text-xs text-slate-400 file:mr-4 file:py-1 file:px-4 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-slate-700 file:text-slate-200 hover:file:bg-slate-600 transition-colors"
              />
            </div>
          </div>

          <FormField
            id="name"
            label="Product Name"
            registration={register("name")}
            error={errors.name}
          />
          <div className="grid grid-cols-2 gap-4">
            <FormField
              id="price"
              label="Price"
              type="number"
              registration={register("price")}
              error={errors.price}
            />
            <div className="space-y-2">
              <label className="text-sm font-medium">Category</label>
              <Select
                defaultValue={product.category}
                onValueChange={(value) =>
                  setValue("category", value as Category["name"])
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {CATEGORIES.map((category) => (
                      <SelectItem key={category.name} value={category.name}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button
            type="submit"
            className="w-full"
            disabled={isPending || isSubmitting}
          >
            {isPending ? "Updating..." : "Save Changes"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
