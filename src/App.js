import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Dashboard,
  Product,
  Transaksi,
  AddProduct,
  EditProduct,
  Rincian,
  NotFound,
} from "./page/index";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/produk" element={<Product />} />
        <Route path="/produk/tambah" element={<AddProduct />} />
        <Route path="/produk/edit/:id" element={<EditProduct />} />
        <Route path="/transaksi" element={<Transaksi />} />
        <Route path="/transaksi/rincian/:kodeNota" element={<Rincian />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
