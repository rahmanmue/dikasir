import { useSubscription } from "@apollo/client";
import { subscribeDataProduk } from "../graphql/subscribe";

export default function useSubscribeDataProduk() {
  const { data, loading, error } = useSubscription(subscribeDataProduk);

  return {
    data,
    loading,
    error,
  };
}
