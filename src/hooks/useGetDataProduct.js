import { useQuery } from "@apollo/client";
import { getDataProduk } from "../graphql/query";

export default function useGetDataProduct() {
  const { data, loading, error } = useQuery(getDataProduk);

  return {
    data,
    loading,
    error,
  };
}
