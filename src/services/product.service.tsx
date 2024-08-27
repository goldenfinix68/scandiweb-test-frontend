import axios, { AxiosResponse } from "axios";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Product, ProductListToDelete } from "../utils/types";
import { API } from "../config/api";

export const useProductList = (): Product[] => {
  const { data } = useSuspenseQuery<Product[], Error>({
    queryKey: ["productList"],
    queryFn: async (): Promise<Product[]> => {
      const response = await axios.get(API.productList);

      return response.data;
    },
  });

  return data;
};

export const massDeleteMutation = async (
  checkedList: ProductListToDelete
): Promise<AxiosResponse<{ key: string }>> => {
  return axios.post(API.massDelete, JSON.stringify(checkedList));
};
