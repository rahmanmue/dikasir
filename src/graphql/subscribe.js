import { gql } from "@apollo/client";

const subscribeDataProduk = gql`
  subscription MySubscription {
    dikasir_Produk {
      id
      namaProduk
      harga
      stok
      gambar
    }
  }
`;

const subscribeDataTransaksi = gql`
  subscription MySubscription {
    dikasir_Transaksi {
      id
      kodeNota
      tanggal
      total
      bayar
      kembali
    }
  }
`;

// For Dashboard

const subscribeJumlahStok = gql`
  subscription stok {
    dikasir_Produk_aggregate {
      aggregate {
        sum {
          stok
        }
      }
    }
  }
`;

const subscribePengeluaran = gql`
  subscription pengeluaran {
    dikasir_Produk_aggregate {
      aggregate {
        sum {
          harga
        }
      }
    }
  }
`;

const subscribePemasukan = gql`
  subscription MySubscription3 {
    dikasir_Transaksi_aggregate {
      aggregate {
        sum {
          total
        }
      }
    }
  }
`;

const subscribeJumlahProduk = gql`
  subscription MySubscription4 {
    dikasir_Produk_aggregate {
      aggregate {
        count(columns: id)
      }
    }
  }
`;

const subscribeJumlahTransaksi = gql`
  subscription MySubscription5 {
    dikasir_Transaksi_aggregate {
      aggregate {
        count(columns: id)
      }
    }
  }
`;

export {
  subscribeDataProduk,
  subscribeDataTransaksi,
  subscribeJumlahStok,
  subscribePemasukan,
  subscribePengeluaran,
  subscribeJumlahProduk,
  subscribeJumlahTransaksi,
};
