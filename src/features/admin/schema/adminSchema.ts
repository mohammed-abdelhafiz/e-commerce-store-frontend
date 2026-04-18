import { z } from "zod";

export const createProductSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters long")
    .max(30, "Name must be at most 30 characters long"),
  description: z
    .string()
    .min(3, "Description must be at least 3 characters long")
    .max(1000, "Description must be at most 1000 characters long"),
  price: z
    .number()
    .min(0, "Price must be at least 0")
    .or(z.string())
    .refine((val) => Number(val) >= 0, "Price must be at least 0"),
  category: z.enum([
    "Jeans",
    "T-shirts",
    "Shoes",
    "Glasses",
    "Jackets",
    "Suits",
    "Bags",
  ]),
  image: z.instanceof(File, { error: "Image is required" }),
  isFeatured: z.boolean().optional(),
});

export type CreateProductDto = z.infer<typeof createProductSchema>;

export const UpdateProductSchema = createProductSchema.partial();

export type UpdateProductDto = z.infer<typeof UpdateProductSchema>;