import data from "./products.json";

export interface Product {
  id: number;
  name: string;
  brand: string;
  image: string;
  images: string[];
  price: number;
  original: number;
  discount: number;
  rating: number;
  reviews: number;
  category: string;
  badge?: string | null;
  inStock: boolean;
  description: string;
  sold?: number;
}

export const categories: string[] = data.categories;
export const products: Product[] = data.products as Product[];
