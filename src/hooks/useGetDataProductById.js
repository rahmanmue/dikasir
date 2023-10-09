import { useQuery } from "@apollo/client";
import { getDataProdukById } from "../graphql/query";

export default function useGetDataProductById(id) {
  const { data } = useQuery(getDataProdukById, {
    variables: { id: id },
  });

  return {
    data,
  };
}
