import { createSlice } from "@reduxjs/toolkit";

export const ListItemSlice = createSlice({
  // name tidak berpengaruh untuk memanggil state
  name: "List",
  // State
  // listItem = {
  //   id, nama, harga, stok, quantity, kodeNota
  // }
  // listPembayaran = {
  //   total, bayar, kembali, kodeNota
  // }
  initialState: {
    uuid: 0,
    listItem: [],
    listPayment: [],
  },
  reducers: {
    addListItem: (state, action) => {
      const add = (value) => {
        state.listItem = [...state.listItem, value];
      };

      const update = (index) => {
        if (state.listItem[index].quantity >= state.listItem[index].stok) {
          state.listItem[index].quantity = state.listItem[index].quantity;
        } else {
          state.listItem[index].quantity =
            state.listItem[index].quantity + action.payload.quantity;
        }
      };

      const checkState = (prevState) => {
        if (prevState.length > 0) {
          // filter semua state daj cek apakah yang diinputkan sudah ada di state
          prevState.forEach((item, index) => {
            if (item.id_produk === action.payload.id_produk) {
              newIndex = [index];
            }
          });

          if (newIndex.length > 0) {
            update(newIndex);
          } else {
            add(action.payload);
          }
        } else {
          add(action.payload);
        }
      };

      // ambil state sebelumnya
      const stateListItem = [...state.listItem];
      // index untuk params update
      let newIndex = [];

      checkState(stateListItem);

      // jika state lebih dari 0
      // if (prevState.length > 0) {
      //   // filter semua state
      //   prevState.forEach((item, index) => {
      //     // cek apakah yang diinputkan suaah ada di state
      //     if (item.id === action.payload.id) {
      //       // isi newIndex dengan indexnya
      //       newIndex = [index];
      //     }
      //   });

      //   if (newIndex.length > 0) {
      //     // console.log(newIndex);
      //     update(newIndex);
      //   } else {
      //     add(action.payload);
      //   }
      // } else {
      //   add(action.payload);
      // }
    },
    deleteListItem: (state, action) => {
      state.listItem = state.listItem.filter((item) => {
        return item.id_produk !== action.payload;
      });
    },
    deleteAllListItem: (state) => {
      state.listItem = [];
      state.listPayment = [];
    },
    increment: (state, action) => {
      if (
        state.listItem[action.payload].quantity >=
        state.listItem[action.payload].stok
      ) {
        state.listItem[action.payload].quantity =
          state.listItem[action.payload].quantity;
      } else {
        state.listItem[action.payload].quantity =
          state.listItem[action.payload].quantity + 1;
      }
    },
    decrement: (state, action) => {
      if (state.listItem[action.payload].quantity <= 1) {
        state.listItem[action.payload].quantity = 1;
      } else {
        state.listItem[action.payload].quantity =
          state.listItem[action.payload].quantity - 1;
      }
    },
    newPayment: (state, action) => {
      state.listPayment = [action.payload];
    },
    addUid: (state, action) => {
      state.uuid = action.payload;
    },
  },
});

export const {
  addListItem,
  deleteListItem,
  deleteAllListItem,
  increment,
  decrement,
  newPayment,
  addUid,
} = ListItemSlice.actions;
export default ListItemSlice.reducer;
