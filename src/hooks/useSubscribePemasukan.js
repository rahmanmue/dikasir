import { useSubscription } from "@apollo/client";
import { subscribePemasukan } from "../graphql/subscribe";

export default function useSubscribePemasukan() {
  const { data, loading, error } = useSubscription(subscribePemasukan);

  return {
    data,
    loading,
    error,
  };
}
