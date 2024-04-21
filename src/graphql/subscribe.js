import { gql } from "@apollo/client";

const subscribeDataProduk = gql`
  subscription MySubscription {
    produk {
      id
      nama_produk
      harga
      stok
      gambar
    }
  }
`;

const subscribeDataTransaksi = gql`
  subscription MySubscription {
    transaksi {
      id
      kode_nota
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
    produk_aggregate {
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
    produk_aggregate {
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
    transaksi_aggregate {
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
    produk_aggregate {
      aggregate {
        count(columns: id)
      }
    }
  }
`;

const subscribeJumlahTransaksi = gql`
  subscription MySubscription5 {
    transaksi_aggregate {
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
