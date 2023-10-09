import { useMutation } from "@apollo/client";
import { updateDataProduk } from "../graphql/mutation";

export default function useUpdateDataProduct() {
  const [updateProduk, { loading: loadingUpdateDataProduk }] =
    useMutation(updateDataProduk);

  return {
    updateProduk,
    loadingUpdateDataProduk,
  };
}
