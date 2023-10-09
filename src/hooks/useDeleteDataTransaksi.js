import { useMutation } from "@apollo/client";
import { deleteDataTransaksi } from "../graphql/mutation";

export default function useDeleteDataTransaksi() {
  const [deleteTransaksi, { loading: loadingDeleteTransaksi }] =
    useMutation(deleteDataTransaksi);

  return {
    deleteTransaksi,
    loadingDeleteTransaksi,
  };
}
