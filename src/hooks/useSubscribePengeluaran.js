import { useSubscription } from "@apollo/client";
import { subscribePengeluaran } from "../graphql/subscribe";

export default function useSubscribePengeluaran() {
  const { data, loading, error } = useSubscription(subscribePengeluaran);

  return {
    data,
    loading,
    error,
  };
}
