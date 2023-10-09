import React from "react";
import { stokIcon, produkIcon, transaksiIcon } from "../../assets";
import { Row, Col } from "react-bootstrap";
import { toRupiah } from "../../utils";

const Index = ({ jP, jPl, jPm, jS, jTs }) => {
  // { jP, jPl, jPm, jS, jTs } from componenet page dashboard

  return (
    <div className="mt-3">
      <div className="title-menu text-dark">Dashboard</div>
      <div className="underline-title bg-orange"></div>

      <Row className="mt-3">
        <Col md={4} className="mt-3">
          <div className="box bg-warning d-flex flex-column">
            <div className="sub-title ms-auto">Jumlah Produk</div>
            <div className="underline bg-white ms-auto w-50 my-1"></div>
            <div className="d-flex align-items-center justify-content-center gap-5 mt-3">
              <img src={produkIcon} alt="produk" width={92} />
              <div className="total">{jP}</div>
            </div>
          </div>
        </Col>
        <Col md={4} className="mt-3">
          <div className="box bg-warning d-flex flex-column">
            <div className="sub-title ms-auto">Stok Keseluruhan</div>
            <div className="underline bg-white ms-auto w-50 my-1"></div>
            <div className="d-flex align-items-center justify-content-center gap-5 mt-3">
              <img src={stokIcon} alt="stok" width={92} />
              <div className="total">{jS}</div>
            </div>
          </div>
        </Col>
        <Col md={4} className="mt-3">
          <div className="box bg-warning d-flex flex-column">
            <div className="sub-title ms-auto">Jumlah Transaksi</div>
            <div className="underline bg-white ms-auto w-50 my-1"></div>
            <div className="d-flex align-items-center justify-content-center gap-5 mt-3">
              <img src={transaksiIcon} alt="transaksi" width={92} />
              <div className="total">{jTs}</div>
            </div>
          </div>
        </Col>
        <Col md={4} className="mt-3">
          <div className="box bg-success d-flex flex-column">
            <div className="sub-title ms-auto text-white">
              Total Pengeluaran
            </div>
            <div className="underline bg-white ms-auto w-25 my-1"></div>
            <div className="d-flex align-items-center justify-content-center gap-5 mt-3">
              <div className="rupiah text-white">{toRupiah(jPl + jPm)}</div>
            </div>
          </div>
        </Col>
        <Col md={4} className="mt-3">
          <div className="box bg-danger d-flex flex-column">
            <div className="sub-title ms-auto text-white">
              Jumlah Harga Produk
            </div>
            <div className="underline bg-white ms-auto w-25 my-1"></div>
            <div className="d-flex align-items-center justify-content-center gap-5 mt-3">
              <div className="rupiah text-white">{toRupiah(jPl)}</div>
            </div>
          </div>
        </Col>
        <Col md={4} className="my-3">
          <div className="box bg-success d-flex flex-column">
            <div className="sub-title ms-auto text-white">
              Jumlah Pembayaran
            </div>
            <div className="underline bg-white ms-auto w-25 my-1"></div>
            <div className="d-flex align-items-center justify-content-center gap-5 mt-3">
              <div className="rupiah text-white">{toRupiah(jPm)}</div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Index;
