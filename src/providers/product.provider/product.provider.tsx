import React, { ReactNode, useMemo, useState } from "react";
import { ProductContext } from "./product.context";
import { Product, ProductListToDelete } from "../../utils/types";
import { massDeleteMutation } from "../../services/product.service";
import { useQueryClient } from "@tanstack/react-query";

export interface Props {
  children: ReactNode;
}

export function ProductProvider({ children }: Props) {
  const queryClient = useQueryClient();

  const [checkedList, setCheckedList] = useState<ProductListToDelete>({
    dvd: [],
    book: [],
    furniture: [],
  });

  const addToCheckedList = (product: Product): void => {
    const newArray = [...checkedList[product.type], product.sku];
    setCheckedList({ ...checkedList, [product.type]: newArray });
  };

  const removeFromCheckedList = (product: Product): void => {
    const newArray = checkedList[product.type].filter(
      (val) => val !== product.sku
    );
    setCheckedList({ ...checkedList, [product.type]: newArray });
  };

  const massDelete = async () => {
    massDeleteMutation(checkedList)
      .then((response) => {
        setCheckedList({ dvd: [], book: [], furniture: [] });
        queryClient.invalidateQueries({ queryKey: ["productList"] });
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.status, err.response.data);
        } else if (err.request) {
          console.log("No Response:", err.request);
        } else {
          console.log("Error Message:", err.message);
        }
      });
  };

  const memorizedValue = useMemo(
    () => ({
      checkedList,
      addToCheckedList,
      removeFromCheckedList,
      massDelete,
    }),
    [checkedList]
  );

  return (
    <ProductContext.Provider value={memorizedValue}>
      {children}
    </ProductContext.Provider>
  );
}
