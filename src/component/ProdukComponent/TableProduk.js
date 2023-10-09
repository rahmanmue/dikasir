import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { addIcon, editIcon, hapusIcon } from "../../assets";
import { toRupiah } from "../../utils";
import { Link } from "react-router-dom";
import { useDeleteDataProduct } from "../../hooks";
import { useEffect, useState } from "react";
import { filterProduct } from "../../utils/index";
import { searchIcon } from "../../assets";
import swal from "sweetalert";
import { ErrorComponent, LoadingComponent, NoDataComponent } from "..";

const TableProduk = ({ data, loading, error }) => {
  // hooks gql deleteproduct
  const { deleteProduk } = useDeleteDataProduct();

  // state serach
  const [searchInput, setSearchInput] = useState("");

  // state filter untuk data produk
  const [dataFilterProduct, setFilterProduct] = useState([]);

  // handle perubahan set search input
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  // handleclick search
  const handleClick = () => {
    setFilterProduct(
      filterProduct({
        dataProduct: data,
        searchInput: searchInput,
        toTable: true,
      })
    );
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
        deleteProduk({
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
    handleClick();
  }, [data, searchInput]);

  return (
    <div className="mt-3">
      <div className="title-menu text-dark">Produk</div>
      <div className="underline-title bg-orange"></div>
      <Row className="mt-3">
        <Col md={8} sm={6}>
          <div className="input-group mb-3 w-75">
            <input
              type="search"
              className="form-control "
              placeholder="Cari Nama Produk ..."
              aria-label="cari"
              aria-describedby="cari"
              onChange={handleChange}
            />
            <span
              className="input-group-text bg-primary"
              id="cari"
              onClick={handleClick}
            >
              <img src={searchIcon} alt="search-icon" />
            </span>
          </div>
        </Col>
        <Col md={4} sm={6}>
          <div className="d-flex justify-content-end mb-2">
            <Link to="/produk/tambah">
              <Button className="d-flex gap-2 ">
                <img src={addIcon} alt="plus" />
                <div>Produk</div>
              </Button>
            </Link>
          </div>
        </Col>
        {loading ? (
          <LoadingComponent />
        ) : error ? (
          <ErrorComponent />
        ) : (
          <Col md={12}>
            {dataFilterProduct.length !== 0 ? (
              <div className="table-responsive mb-5">
                <table className="table table-bordered ">
                  <thead className="table-dark ">
                    <tr className="text-center">
                      <td>No</td>
                      <td>Gambar</td>
                      <td>Nama Produk</td>
                      <td>Harga</td>
                      <td>Stok</td>
                      <td>Tindakan</td>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {dataFilterProduct.map((item, index) => (
                      <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>
                          <img
                            src={item.gambar}
                            alt="gambar"
                            // className="img-fluid"
                            width={100}
                          />
                        </td>
                        <td>{item.namaProduk}</td>
                        <td>{toRupiah(item.harga)}</td>
                        <td>{item.stok}</td>
                        <td>
                          <div className="d-flex gap-2 justify-content-center">
                            <Link to={`/produk/edit/${item.id}`}>
                              <Button className="d-flex gap-2 bg-warning border-0 ">
                                <img src={editIcon} alt="edit" />
                              </Button>
                            </Link>
                            <Button
                              className="d-flex gap-2 bg-danger border-0 "
                              // onClick={() => hapusProduk(item.id)}
                              onClick={() => handlehapus(item.id)}
                            >
                              <img src={hapusIcon} alt="hapus" />
                            </Button>
                          </div>
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

export default TableProduk;
