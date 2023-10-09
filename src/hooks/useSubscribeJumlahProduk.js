import { useSubscription } from "@apollo/client";
import { subscribeJumlahProduk } from "../graphql/subscribe";

export default function useSubscribeJumlahProduk() {
  const { data, loading, error } = useSubscription(subscribeJumlahProduk);

  return {
    data,
    loading,
    error,
  };
}
