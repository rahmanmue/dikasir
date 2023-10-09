import { useMutation } from "@apollo/client";
import { upsertDataProduk } from "../graphql/mutation";

export default function useUpsertDataProduct() {
  const [upsertProduk, { loading: loadingUpsert }] =
    useMutation(upsertDataProduk);

  return {
    upsertProduk,
    loadingUpsert,
  };
}
