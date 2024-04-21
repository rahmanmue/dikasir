import { gql } from "@apollo/client";

const getDataProduk = gql`
  query MyQuery {
    produk {
      id
      nama_produk
      stok
      harga
      gambar
    }
  }
`;

const getDataProdukById = gql`
  query MyQuery($id: uuid = "") @cached {
    produk_by_pk(id: $id) {
      id
      harga
      gambar
      nama_produk
      stok
    }
  }
`;

// const getDataNota = gql`
//   query MyQuery($_eq: uuid = "", $_eq2: uuid = "") {
//     dikasir_Transaksi(where: { kode_nota: { _eq: $_eq } }) {
//       bayar
//       id
//       kembali
//       kode_nota
//       tanggal
//       total
//       rincian(where: { kode_nota: { _eq: $_eq2 } }) {
//         stok
//         quantity
//         nama_produk
//         kode_nota
//         id_produk
//         id
//         harga
//       }
//     }
//   }
// `;

const getDataNota = gql`
  query MyQuery($_eq: uuid = "", $kode_nota: uuid_comparison_exp = { _eq: "" })
  @cached {
    transaksi(
      where: { kode_nota: { _eq: $_eq }, rincian: { kode_nota: $kode_nota } }
    ) {
      total
      tanggal
      kode_nota
      kembali
      id
      bayar
      rincian {
        quantity
        nama_produk
        kode_nota
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
