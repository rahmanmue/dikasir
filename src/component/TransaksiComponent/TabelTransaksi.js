import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { infoIcon, deleteredIcon, resetIcon } from "../../assets";
import { toRupiah } from "../../utils";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { filterDate } from "../../utils";
import { useDeleteDataTransaksi } from "../../hooks";
import swal from "sweetalert";
import { ErrorComponent, LoadingComponent, NoDataComponent } from "..";

const TabelTransaksi = ({ data, loading, error }) => {
  // hooks tanggal
  const [tanggal, setTanggal] = useState("");

  // delete
  const { deleteTransaksi, loadingDeleteTransaksi } = useDeleteDataTransaksi();

  // state filter untuk data produk
  const [dataFilter, setFilter] = useState([]);

  // handle perubahan set search input
  const handleChange = (e) => {
    setTanggal(e.target.value);
  };

  // handlehapus
  const handlehapus = (id) => {
    swal({
      title: "Apakah Kamu Yakin?",
      text: "Hapus secara permanen!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        deleteTransaksi({
          variables: {
            _eq: id,
          },
        });
        swal("Data Berhasil Dihapus!", {
          icon: "success",
        });
      }
    });
  };

  // component didupdate ketika ada data dan searchinput
  useEffect(() => {
    setFilter(
      filterDate({
        Transaksi: data || [],
        Tanggal: tanggal,
      })
    );
  }, [data, tanggal]);

  return (
    <div className="mt-3">
      <div className="title-menu text-dark-2">Transaksi</div>
      <div className="underline-title bg-orange"></div>

      <Row>
        <Col md={4} className="my-4">
          <label className="form-label">Cari Berdasarkan Tanggal</label>
          <div className="input-group">
            <input
              type="date"
              className="form-control"
              onChange={handleChange}
            />
            <Button
              className="input-group-text btn-warning"
              onClick={() => setTanggal("")}
            >
              <img src={resetIcon} alt="reset" />
            </Button>
          </div>
        </Col>

        {loading ? (
          <LoadingComponent />
        ) : error ? (
          <ErrorComponent />
        ) : (
          <Col md={12}>
            {dataFilter.length !== 0 ? (
              <div className="table-responsive">
                <table className="table table-bordered text-center mb-5">
                  <thead className="table-dark ">
                    <tr>
                      <td>No</td>
                      <td>Tanggal</td>
                      <td>Total</td>
                      <td>Bayar</td>
                      <td>Kembali</td>
                      <td>Tindakan</td>
                    </tr>
                  </thead>
                  <tbody>
                    {dataFilter.map((item, index) => (
                      <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.tanggal}</td>
                        <td>{toRupiah(item.total)}</td>
                        <td>{toRupiah(item.bayar)}</td>
                        <td>{toRupiah(item.kembali)}</td>
                        <td className="d-flex justify-content-center">
                          <Link to={`/transaksi/rincian/${item.kodeNota}`}>
                            <Button className="bg-transparent border-0 p-2 ">
                              <img src={infoIcon} alt="edit" width={25} />
                            </Button>
                          </Link>
                          <Button
                            className="bg-transparent border-0 p-2"
                            onClick={() => handlehapus(item.id)}
                          >
                            <img src={deleteredIcon} alt="hapus" width={25} />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <NoDataComponent />
            )}
          </Col>
        )}
      </Row>
    </div>
  );
};

export default TabelTransaksi;
