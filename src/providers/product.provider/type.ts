import { Product, ProductListToDelete } from "../../utils/types";

export interface ProductContextType {
  checkedList: ProductListToDelete;
  addToCheckedList: (p: Product) => void;
  removeFromCheckedList: (p: Product) => void;
  massDelete: () => void;
}
