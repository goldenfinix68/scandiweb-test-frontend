import React, { ReactNode, useMemo, useState } from "react";
import { ProductContext } from "./product.context";
import { Product } from "../../utils/types";

export interface Props {
  children: ReactNode;
}

export function ProductProvider({ children }: Props) {
  const [products, setProducts] = useState<Product[]>([]);
  const memorizedValue = useMemo(
    () => ({
      products,
    }),
    [products]
  );

  return (
    <ProductContext.Provider value={memorizedValue}>
      {children}
    </ProductContext.Provider>
  );
}
