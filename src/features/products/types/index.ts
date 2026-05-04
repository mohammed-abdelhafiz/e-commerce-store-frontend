export type Category = {
  href: string;
  name:
    | "Jeans"
    | "T-shirts"
    | "Shoes"
    | "Glasses"
    | "Jackets"
    | "Suits"
    | "Bags"
  imageUrl: string;
};

export type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: Category["name"];
  image: {
    url: string;
    public_id: string;
  };
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
};

export type PaginatedResponse<T> = {
  products: T[];
  pagination: {
    total: number;
    totalPages: number;
    currentPage: number;
    limit: number;
  };
};

