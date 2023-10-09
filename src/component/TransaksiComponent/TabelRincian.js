import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { ErrorComponent, LoadingComponent } from "..";

import { toRupiah } from "../../utils";

const TabelRincian = ({ data, loading, error }) => {
  const [newData, setNewData] = useState();
  useEffect(() => {
    if (data) {
      setNewData(data[0] || {});
    }
  }, [data]);

  // console.log(newData);

  return (
    <div className="mt-3">
      <div className="title-menu text-dark">Rincian Transaksi</div>
      <div className="underline-title bg-warning"></div>

      {loading ? (
        <LoadingComponent />
      ) : error ? (
        <ErrorComponent />
      ) : (
        <Row>
          <Col md={6} className="mt-5">
            <div className="border-bottom py-2">
              <span className="fw-bold ">Kode Transaksi : </span>
              {newData?.kodeNota}
            </div>

            <div className="py-2">
              <span className="fw-bold">Tanggal ( tahun-bulan-hari ) : </span>
              {newData?.tanggal}
            </div>
          </Col>

          <Col md={12} className="my-3">
            <div className="table-responsive">
              <table className="table table-bordered ">
                <thead className="table-dark">
                  <tr>
                    <td>No</td>
                    <td>Produk</td>
                    <td>Quantity</td>
                    <td>Harga</td>
                    <td>Jumlah</td>
                  </tr>
                </thead>
                <tbody>
                  {newData?.rincian.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.namaProduk}</td>
                      <td>{item.quantity}</td>
                      <td>{toRupiah(item.harga)}</td>
                      <td>{toRupiah(item.quantity * item.harga)}</td>
                    </tr>
                  ))}
                  <tr>
                    <td></td>
                    <td colSpan={3} className="fw-bold">
                      Total
                    </td>
                    <td className="fw-bold">{toRupiah(newData?.total)}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td colSpan={3} className="fw-bold">
                      {" "}
                      Bayar{" "}
                    </td>
                    <td className="fw-bold">{toRupiah(newData?.bayar)}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td colSpan={3} className="fw-bold">
                      {" "}
                      Kembali{" "}
                    </td>
                    <td className="fw-bold ">{toRupiah(newData?.kembali)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default TabelRincian;
