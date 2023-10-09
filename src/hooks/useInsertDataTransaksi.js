import { useMutation } from "@apollo/client";
import { insertDataTransaksi } from "../graphql/mutation";

export default function useInsertDataTransaksi() {
  const [insertTransaksi, { loading: loadingInsertTransaksi }] =
    useMutation(insertDataTransaksi);

  return {
    insertTransaksi,
    loadingInsertTransaksi,
  };
}
