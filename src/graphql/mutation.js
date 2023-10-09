import { gql } from "@apollo/client";

const insertDataNota = gql`
  mutation MyMutation($objects: [dikasir_Nota_insert_input!] = {}) {
    insert_dikasir_Nota(objects: $objects) {
      affected_rows
      returning {
        id
        id_produk
        kodeNota
        namaProduk
        quantity
        harga
      }
    }
  }
`;

const insertDataTransaksi = gql`
  mutation MyMutation($object: dikasir_Transaksi_insert_input = {}) {
    insert_dikasir_Transaksi_one(object: $object) {
      id
      total
      bayar
      kembali
      kodeNota
      tanggal
    }
  }
`;

// const upsertDataProduk = gql`
//   mutation MyMutation(
//     $objects: [dikasir_Produk_insert_input!] = {}
//     $constraint: dikasir_Produk_constraint = Product_pkey
//   ) {
//     insert_dikasir_Produk(
//       objects: $objects
//       on_conflict: { constraint: $constraint, update_columns: stok }
//     ) {
//       affected_rows
//     }
//   }
// `;

const upsertDataProduk = gql`
  mutation MyMutation($objects: [dikasir_Produk_insert_input!] = {}) {
    insert_dikasir_Produk(
      objects: $objects
      on_conflict: { constraint: Produk_pkey, update_columns: stok }
    ) {
      affected_rows
    }
  }
`;

const insertDataProduk = gql`
  mutation MyMutation($object: dikasir_Produk_insert_input = {}) {
    insert_dikasir_Produk_one(object: $object) {
      id
      namaProduk
      harga
      stok
      gambar
    }
  }
`;

const deleteDataProduk = gql`
  mutation MyMutation($_eq: uuid = "") {
    delete_dikasir_Produk(where: { id: { _eq: $_eq } }) {
      affected_rows
    }
  }
`;

const deleteDataTransaksi = gql`
  mutation MyMutation($_eq: uuid = "") {
    delete_dikasir_Transaksi(where: { id: { _eq: $_eq } }) {
      affected_rows
    }
  }
`;

const updateDataProduk = gql`
  mutation MyMutation($id: uuid = "", $_set: dikasir_Produk_set_input = {}) {
    update_dikasir_Produk_by_pk(pk_columns: { id: $id }, _set: $_set) {
      id
      namaProduk
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
