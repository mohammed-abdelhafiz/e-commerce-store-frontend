import { Card, CardContent } from "@/shared/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "motion/react";
import { FormField } from "@/shared/components/FormField";
import {
  createProductSchema,
  CreateProductDto,
} from "../../schema/adminSchema";
import useCreateProduct from "../../hooks/useCreateProduct";
import { Package, DollarSign, Tag } from "lucide-react";
import { CreateProductFormHeader } from "./CreateProductFormHeader";
import { AddProductButton } from "./AddProductButton";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
import { ImageFormField } from "@/shared/components/ImageFormField";
import { useState } from "react";
import { Category } from "@/features/products/types";
import { CATEGORIES } from "@/shared/lib/constants";
import { Switch } from "@/shared/components/ui/switch";
import { Label } from "@/shared/components/ui/label";
import { Star } from "lucide-react";

export function CreateProductForm() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    setError,
    clearErrors,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<CreateProductDto>({
    resolver: zodResolver(createProductSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      description: "",
      price: "1",
      category: "Jeans",
      image: undefined,
      isFeatured: false,
    },
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.size < 1024 * 1024 * 5 && file.type.startsWith("image/")) {
      setValue("image", file);
      clearErrors("image");
      setImagePreview(URL.createObjectURL(file));
    } else {
      setError("image", {
        type: "manual",
        message: "Please upload a valid image file (max 5MB)",
      });
    }
  };

  const { mutateAsync: createProduct, isPending } = useCreateProduct();

  const onSubmit = async (data: CreateProductDto) => {
    await createProduct(data);
    reset();
    setImagePreview("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col gap-6 max-w-2xl mx-auto py-8 px-4 w-full"
    >
      <Card className="border-none overflow-hidden relative group backdrop-blur-xl bg-background/60 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] ring-1 ring-white/10">
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-primary/5 pointer-events-none" />
        <CreateProductFormHeader />

        <CardContent className="p-6 relative">
          <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8"
          >
            <div className="flex flex-col gap-6">
              {/* Section: Basic Info */}
              <div className="space-y-5">
                <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-primary/80">
                  <Package size={14} />
                  <span>General Details</span>
                </div>

                <FormField
                  id="name"
                  label="Product Name"
                  type="text"
                  placeholder="e.g. Hyper-X Wireless Headphones"
                  registration={register("name")}
                  error={errors.name}
                />

                <FormField
                  id="description"
                  label="Description"
                  as="textarea"
                  placeholder="Highlight the key features and benefits..."
                  registration={register("description")}
                  error={errors.description}
                  resize={false}
                />
              </div>

              {/* Section: Pricing */}
              <div className="space-y-5 pt-6 border-t border-muted-foreground/10">
                <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-primary/80">
                  <DollarSign size={14} />
                  <span>Pricing</span>
                </div>
                <FormField
                  id="price"
                  label="Price ($)"
                  type="number"
                  placeholder="0.00"
                  min={1}
                  registration={register("price", { valueAsNumber: true })}
                  error={errors.price}
                />
              </div>

              {/* Section: Category & Media */}
              <div className="space-y-5 pt-6 border-t border-muted-foreground/10">
                <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-primary/80">
                  <Tag size={14} />
                  <span>Categorization & Media</span>
                </div>
                <div className="flex flex-col gap-3">
                  <Select
                    defaultValue={CATEGORIES[0].name}
                    onValueChange={(value) =>
                      setValue("category", value as Category["name"])
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue />
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
                  <ImageFormField
                    id="image"
                    label="Image"
                    error={errors.image}
                    onChange={handleImageChange}
                    preview={
                      imagePreview
                        ? { url: imagePreview, alt: "product image" }
                        : undefined
                    }
                  />

                  {/* Section: Visibility */}
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-primary/5 border border-primary/10 transition-all hover:bg-primary/10">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <Star size={16} className="text-primary fill-primary/20" />
                        <Label htmlFor="isFeatured" className="text-sm font-bold tracking-tight cursor-pointer">
                          Featured Product
                        </Label>
                      </div>
                      <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">
                        Highlight this product on the homepage
                      </p>
                    </div>
                    <Switch
                      id="isFeatured"
                      checked={watch("isFeatured")}
                      onCheckedChange={(checked) => setValue("isFeatured", checked)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <AddProductButton
              isPending={isPending}
              isSubmitting={isSubmitting}
            />
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
