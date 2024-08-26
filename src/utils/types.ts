export type ProductType = "dvd" | "book" | "furniture";

export interface Product {
  sku: string;
  name: string;
  price: number;
  type: ProductType;
  size?: number;
  weight?: number;
  width?: number;
  length?: number;
  height?: number;
}
