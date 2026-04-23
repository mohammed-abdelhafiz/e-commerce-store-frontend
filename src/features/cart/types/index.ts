import { Product } from "@/features/products/types";

export interface ICartItem {
    _id: string;
    product: Product;
    quantity: number;
}

export interface ICoupon {
    code: string;
    discountPercentage: number;
}