import { useSubscription } from "@apollo/client";
import { subscribeDataTransaksi } from "../graphql/subscribe";

export default function useSubscribeDataTransaksi() {
  const { data, loading, error } = useSubscription(subscribeDataTransaksi);

  return {
    data,
    loading,
    error,
  };
}
