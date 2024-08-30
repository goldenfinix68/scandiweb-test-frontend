import { PROPERTY_MAP } from "./constants";
import { Product } from "./types";

export function handleProductData(product: Product): string {
  const productDescription = PROPERTY_MAP[product.type];
  const values = productDescription.attributes.map(
    (attribute) => product[attribute]
  );
  return values.join("x");
}
