import { useMutation } from "@apollo/client";
import { insertDataProduk } from "../graphql/mutation";

export default function useInsertDataProduk() {
  const [insertProduk, { loading: loadingInsertProduk }] =
    useMutation(insertDataProduk);

  return {
    insertProduk,
    loadingInsertProduk,
  };
}
