import { useMutation } from "@apollo/client";
import { insertDataNota } from "../graphql/mutation";

export default function useInsertDataNota() {
  const [insertNota, { loading: loadingInsertNota }] =
    useMutation(insertDataNota);

  return {
    insertNota,
    loadingInsertNota,
  };
}
