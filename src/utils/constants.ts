import {
  FormInputDescription,
  ProductDescription,
  ProductType,
  ValidationResult,
} from "./types";

export const PROPERTY_MAP: Record<ProductType, ProductDescription> = {
  dvd: {
    attributes: ["size"],
    unit: "MB",
    label: "Size",
  },
  book: {
    attributes: ["weight"],
    unit: "KG",
    label: "Weight",
  },
  furniture: {
    attributes: ["height", "width", "length"],
    unit: "",
    label: "Dimension",
  },
};

export const formDescription: Record<string, FormInputDescription> = {
  dvd: {
    description: "Please, provide size",
    unit: "MB",
  },
  book: {
    description: "Please, provide weight",
    unit: "KG",
  },
  furniture: {
    description: "Please, provide dimensions",
    unit: "CM",
  },
};

export const errorMessages: Record<ValidationResult, string> = {
  success: "",
  required: "Please, submit required data",
  invalid: "Please, provide the data of indicated type",
  duplicate: "Please, provide unique SKU",
};
