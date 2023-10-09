import { useMutation } from "@apollo/client";
import { deleteDataProduk } from "../graphql/mutation";

export default function useDeleteDataProduk() {
  const [deleteProduk, { loading: loadingDeleteProduk }] =
    useMutation(deleteDataProduk);

  return {
    deleteProduk,
    loadingDeleteProduk,
  };
}
