export type ProductType = "dvd" | "book" | "furniture";

export type ProductDetail = "size" | "weight" | "height" | "width" | "length";

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

export interface FormInputDescription {
  description: string;
  unit: string;
}

export interface ProductDescription {
  attributes: ProductDetail[];
  label: string;
  unit: string;
}

export type ProductListToDelete = Record<ProductType, string[]>;

export type ValidationResult = "success" | "required" | "invalid" | "duplicate";
