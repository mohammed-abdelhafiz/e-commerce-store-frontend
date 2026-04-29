import { Product } from "@/features/products/types";
import { User } from "@/shared/types";

export interface OrderItem {
  product: Product;
  quantity: number;
  price: number;
}

export interface ShippingAddress {
  name: string;
  address: string;
  apt: string;
  city: string;
  state: string;
  zip: string;
}

export interface Order {
  _id: string;
  user: User;
  items: OrderItem[];
  totalAmount: number;
  status: "paid" | "shipped" | "delivered";
  paymentId: string;
  shippingAddress: ShippingAddress;
  createdAt: string;
  updatedAt: string;
}
