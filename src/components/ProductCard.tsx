import { Product } from "../utils/types";
import "../sass/components/_ProductCard.scss";
import { useContext, useState } from "react";
import { PROPERTY_MAP } from "../utils/constants";
import { handleProductData } from "../utils/handleProductData";
import { ProductContext } from "../providers/product.provider/product.context";

interface Props {
  data: Product;
}

export function ProductCard({ data }: Props) {
  const { checkedList, addToCheckedList, removeFromCheckedList } =
    useContext(ProductContext);

  const [checked, setChecked] = useState<boolean>(
    checkedList[data.type].includes(data.sku)
  );
  const { label, unit } = PROPERTY_MAP[data.type];

  const handleCheckbox = (status: boolean) => {
    status ? addToCheckedList(data) : removeFromCheckedList(data);
    setChecked(status);
  };

  return (
    <div className={checked ? "product-card-checked" : "product-card"}>
      <input
        type="checkbox"
        className="delete-checkbox"
        checked={checked}
        onChange={(e) => handleCheckbox(e.target.checked)}
      />
      <div className="product-description">
        <div>{data.sku}</div>
        <div>{data.name}</div>
        <div>$ {data.price}</div>
        <div>
          {label}:&nbsp;{handleProductData(data)}
          {unit}
        </div>
      </div>
    </div>
  );
}
