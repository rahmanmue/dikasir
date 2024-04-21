import React from "react";
import { useState, useEffect } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { storage } from "../../firebase/firebase";
import { useParams } from "react-router-dom";
import { useGetDataProductById } from "../../hooks";
import { useUpdateDataProduct } from "../../hooks";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { defaultImage } from "../../assets";

const EditProduk = () => {
  // ambil id dan navigasi halaman
  let { id } = useParams();
  const navigate = useNavigate();

  // gql getpprodukbyid dan updateproduk
  const { data } = useGetDataProductById(id);
  const { updateProduk } = useUpdateDataProduct();

  const [state, setState] = useState();

  // set data ke state
  useEffect(() => {
    if (data) {
      setState(data?.produk_by_pk || {});
    }
  }, [data]);

  // handle perubahan setiap form input
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  // state input file
  const [file, setFile] = useState(null);
  const [url, setURL] = useState("");

  // set file yang diuolaoad
  const handleFileUpload = async (e) => {
    if (e.target.files[0]) setFile(e.target.files[0]);
  };

  // handel info
  const [info, setInfo] = useState("Klik Untuk Upload Gambar");

  // handle Upload
  const handleUpload = async (e) => {
    e.preventDefault();
    const path = `/images/${file.name}`;
    const ref = storage.ref(path);
    setInfo("wait");
    await ref.put(file);
    const url = await ref.getDownloadURL();
    setURL(url);
    setFile(null);
    setInfo("done");
  };

  // handel Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.nama_produk === "" || state.harga === "" || state.stok === "") {
      swal("Perhatian!", "Beberapa Form Belum Terisi!", "warning", {
        button: true,
      });
    } else {
      let newData;
      if (url === "") {
        newData = {
          nama_produk: state.nama_produk,
          harga: state.harga,
          stok: state.stok,
          gambar: state.gambar,
        };
      } else {
        newData = {
          nama_produk: state.nama_produk,
          harga: state.harga,
          stok: state.stok,
          gambar: url,
        };
      }
      // console.log(newData);
      updateProduk({
        variables: {
          id: state.id,
          _set: newData,
        },
      });

      swal("Berhasil", "Data Berhasil Diedit", "success", {
        button: true,
      });

      navigate("/produk");
    }
  };

  return (
    <div className="mt-3">
      <div className="title-menu text-dark">Edit Produk</div>
      <div className="underline-title bg-warning"></div>

      <Row>
        <Col md={10} className="my-4">
          <div className="mb-3">
            <input type="hidden" value={state?.id || ""} />
            <input type="hidden" value={state?.gambar || ""} />
            <label htmlFor="nama_produk" className="form-label fw-bold fs-5">
              Nama Produk
            </label>
            <input
              type="text"
              className="form-control"
              id="nama_produk"
              name="nama_produk"
              value={state?.nama_produk || ""}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="harga" className="form-label fw-bold fs-5">
              Harga
            </label>
            <input
              type="number"
              className="form-control"
              id="harga"
              name="harga"
              min="1"
              value={state?.harga || ""}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="stok" className="form-label fw-bold fs-5">
              Stok
            </label>
            <input
              type="number"
              className="form-control"
              id="stok"
              min="1"
              name="stok"
              value={state?.stok || ""}
              onChange={handleChange}
            />
          </div>
          <label htmlFor="upload" className="form-label fw-bold fs-5 ">
            Upload Gambar
          </label>

          <Row>
            <Col md={4}>
              {url ? (
                <img src={url} alt="gambar" className="img-fluid " />
              ) : (
                <img
                  src={state?.gambar || defaultImage}
                  alt="gambar"
                  className="img-fluid mb-3"
                />
              )}
            </Col>
            <Col md={8}>
              <form onSubmit={handleUpload}>
                <div className="input-group">
                  <input
                    type="file"
                    className="form-control"
                    id="gambar"
                    onChange={handleFileUpload}
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Tombol Upload tidak akan berfungsi jika belum dipilih gambar"
                    accept="image/x-png,image/gif,image/jpeg, image/jpg, image/svg"
                  />
                </div>
                <button
                  className={`input-group-text my-3 ${
                    file ? "bg-warning text-white" : "not-allowed"
                  } ${info === "done" ? "bg-primary text-white" : ""}`}
                  disabled={!file}
                >
                  {info === "wait" ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Loading...
                    </>
                  ) : info === "done" ? (
                    " Selesai..."
                  ) : info && file ? (
                    info
                  ) : (
                    "Upload Gambar"
                  )}
                </button>
                <span className="mt-1 text-warning">
                  Biarkan Jika Gambar tidak ingin diubah
                </span>
              </form>
            </Col>
          </Row>

          <div className="d-flex gap-2 mt-4 justify-content-end">
            <Button onClick={handleSubmit}>Simpan</Button>
            <Button
              className="btn-warning border-0"
              onClick={() => navigate(-1)}
            >
              Kembali
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default EditProduk;
