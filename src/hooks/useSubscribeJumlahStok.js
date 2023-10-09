import { useSubscription } from "@apollo/client";
import { subscribeJumlahStok } from "../graphql/subscribe";

export default function useSubscribeJumlahStok() {
  const { data, loading, error } = useSubscription(subscribeJumlahStok);

  return {
    data,
    loading,
    error,
  };
}
