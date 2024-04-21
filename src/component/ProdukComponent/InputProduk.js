import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { storage } from "../../firebase/firebase";
import { useInsertDataProduct } from "../../hooks";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { defaultImage } from "../../assets";

const InputProduk = () => {
  // navigasi halaman
  const navigate = useNavigate();

  // gql hook insert data produk
  const { insertProduk } = useInsertDataProduct();

  // state input
  const [nama_produk, setNamaProduk] = useState("");
  const [harga, setHarga] = useState();
  const [stok, setStok] = useState();

  // state input file
  const [file, setFile] = useState(null);
  const [url, setURL] = useState("");

  // set file yang diuolaoad
  const handleFileUpload = async (e) => {
    if (e.target.files[0]) setFile(e.target.files[0]);
  };

  const [info, setInfo] = useState("Klik Untuk Upload Gambar");

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

  // console.log(url);

  const reset = () => {
    setHarga("");
    setNamaProduk("");
    setStok("");
    setInfo("");
    setURL("");
    document.getElementById("gambar").value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nama_produk === "" || harga === "" || stok === "") {
      // return alert("Beberapa Form Belum Terisi");
      swal("Perhatian!", "Beberapa Form Belum Terisi!", "warning", {
        button: true,
      });
    } else if (file === "" || url === "") {
      swal("Perhatian!", "Gambar Belum Terupload!", "warning", {
        button: true,
      });
    } else {
      const data = {
        nama_produk: nama_produk,
        harga: harga,
        stok: stok,
        gambar: url,
      };

      insertProduk({
        variables: {
          object: data,
        },
      });
      // console.log(data);
      swal("Berhasil", "Data Berhasil Ditambahkan", "success", {
        button: true,
      });
      reset();
      navigate("/produk");
    }
  };

  return (
    <div className="mt-3">
      <div className="title-menu text-dark">Tambah Produk</div>
      <div className="underline-title bg-warning"></div>

      <Row>
        <Col md={10} className="my-4">
          <form>
            <div className="mb-3">
              <label htmlFor="nama_produk" className="form-label fw-bold fs-5">
                Nama Produk
              </label>
              <input
                type="text"
                className="form-control"
                id="nama_produk"
                name="nama_produk"
                value={nama_produk || " "}
                onChange={(e) => {
                  setNamaProduk(e.target.value);
                }}
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
                value={harga || ""}
                onChange={(e) => {
                  setHarga(Number(e.target.value));
                }}
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
                value={stok || ""}
                onChange={(e) => {
                  setStok(Number(e.target.value));
                }}
                required
              />
            </div>
            <Row>
              <Col md={4}>
                {url ? (
                  <img src={url} alt="gambar" className="img-fluid " />
                ) : (
                  <img src={defaultImage} alt="gambar" className="img-fluid " />
                )}
              </Col>
              <Col md={8}>
                <label htmlFor="upload" className="form-label fw-bold fs-5 ">
                  Upload Gambar
                </label>

                <div className="input-group">
                  <input
                    type="file"
                    id="gambar"
                    className="form-control"
                    onChange={handleFileUpload}
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Tombol Upload tidak akan berfungsi jika belum dipilih gambar"
                    accept="image/x-png,image/gif,image/jpeg, image/jpg, image/svg"
                  />
                </div>
                <button
                  className={`input-group-text mt-3 ${
                    file ? "bg-success text-white" : "not-allowed"
                  } ${info === "done" ? "bg-success text-white" : ""}`}
                  disabled={!file}
                  onClick={handleUpload}
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
                    "Gambar Belum Dipilih"
                  )}
                </button>
              </Col>
            </Row>

            <div className="d-flex gap-2 mt-4 justify-content-end">
              <Button onClick={handleSubmit}>Tambah</Button>
              <Button className="btn-danger" onClick={reset}>
                Reset
              </Button>
              <Button className="btn-warning" onClick={() => navigate(-1)}>
                Kembali
              </Button>
            </div>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default InputProduk;
