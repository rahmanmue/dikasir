import { gql } from "@apollo/client";

const getDataProduk = gql`
  query MyQuery {
    dikasir_Produk {
      id
      namaProduk
      stok
      harga
      gambar
    }
  }
`;

const getDataProdukById = gql`
  query MyQuery($id: uuid = "") @cached {
    dikasir_Produk_by_pk(id: $id) {
      id
      harga
      gambar
      namaProduk
      stok
    }
  }
`;

// const getDataNota = gql`
//   query MyQuery($_eq: uuid = "", $_eq2: uuid = "") {
//     dikasir_Transaksi(where: { kodeNota: { _eq: $_eq } }) {
//       bayar
//       id
//       kembali
//       kodeNota
//       tanggal
//       total
//       rincian(where: { kodeNota: { _eq: $_eq2 } }) {
//         stok
//         quantity
//         namaProduk
//         kodeNota
//         id_produk
//         id
//         harga
//       }
//     }
//   }
// `;

const getDataNota = gql`
  query MyQuery($_eq: uuid = "", $kodeNota: uuid_comparison_exp = { _eq: "" })
  @cached {
    dikasir_Transaksi(
      where: { kodeNota: { _eq: $_eq }, rincian: { kodeNota: $kodeNota } }
    ) {
      total
      tanggal
      kodeNota
      kembali
      id
      bayar
      rincian {
        quantity
        namaProduk
        kodeNota
        id_produk
        id
        harga
      }
    }
  }
`;

export {
  getDataProduk,
  getDataProdukById,
  getDataNota,
  //  getDataTransaksi
};
