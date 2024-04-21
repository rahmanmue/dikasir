import { gql } from "@apollo/client";

const insertDataNota = gql`
  mutation MyMutation($objects: [nota_insert_input!] = {}) {
    insert_nota(objects: $objects) {
      affected_rows
      returning {
        id
        id_produk
        kode_nota
        nama_produk
        quantity
        harga
      }
    }
  }
`;

const insertDataTransaksi = gql`
  mutation MyMutation($object: transaksi_insert_input = {}) {
    insert_transaksi_one(object: $object) {
      id
      total
      bayar
      kembali
      kode_nota
      tanggal
    }
  }
`;

// const upsertDataProduk = gql`
//   mutation MyMutation(
//     $objects: [produk_insert_input!] = {}
//     $constraint: produk_constraint = Product_pkey
//   ) {
//     insert_produk(
//       objects: $objects
//       on_conflict: { constraint: $constraint, update_columns: stok }
//     ) {
//       affected_rows
//     }
//   }
// `;

const upsertDataProduk = gql`
  mutation MyMutation($objects: [produk_insert_input!] = {}) {
    insert_produk(
      objects: $objects
      on_conflict: { constraint: produk_pkey, update_columns: stok }
    ) {
      affected_rows
    }
  }
`;

const insertDataProduk = gql`
  mutation MyMutation($object: produk_insert_input = {}) {
    insert_produk_one(object: $object) {
      id
      nama_produk
      harga
      stok
      gambar
    }
  }
`;

const deleteDataProduk = gql`
  mutation MyMutation($_eq: uuid = "") {
    delete_produk(where: { id: { _eq: $_eq } }) {
      affected_rows
    }
  }
`;

const deleteDataTransaksi = gql`
  mutation MyMutation($_eq: uuid = "") {
    delete_transaksi(where: { id: { _eq: $_eq } }) {
      affected_rows
    }
  }
`;

const updateDataProduk = gql`
  mutation MyMutation($id: uuid = "", $_set: produk_set_input = {}) {
    update_produk_by_pk(pk_columns: { id: $id }, _set: $_set) {
      id
      nama_produk
      stok
      harga
      gambar
    }
  }
`;

export {
  insertDataNota,
  insertDataTransaksi,
  upsertDataProduk,
  insertDataProduk,
  deleteDataProduk,
  updateDataProduk,
  deleteDataTransaksi,
};
