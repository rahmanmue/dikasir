import { useSubscription } from "@apollo/client";
import { subscribeJumlahTransaksi } from "../graphql/subscribe";

export default function useSubscribeJumlahTransaksi() {
  const { data, loading, error } = useSubscription(subscribeJumlahTransaksi);

  return {
    data,
    loading,
    error,
  };
}
