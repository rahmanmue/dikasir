import { useState } from "react";
import { Button, Col, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllListItem, newPayment } from "../../store/ListItemSlice";
import { toRupiah, getDate } from "../../utils/index";
import {
  useInsertDataNota,
  useUpsertDataProduct,
  useInsertDataTransaksi,
} from "../../hooks/index";
import swal from "sweetalert";

const Index = () => {
  // graphql hooks
  const { insertNota } = useInsertDataNota();
  // eslint-disable-next-line no-unused-vars
  const { insertTransaksi, loadingInsertTransaksi } = useInsertDataTransaksi();
  // eslint-disable-next-line no-unused-vars
  const { upsertProduk, loadingUpsertProduk } = useUpsertDataProduct();

  // store redux
  const dispatch = useDispatch();
  const listItem = useSelector((state) => state.List.listItem);
  const listPayment = useSelector((state) => state.List.listPayment);

  // bayar
  const [bayar, setBayar] = useState("");

  // total bayar
  let totalBayar = 0;
  totalBayar = listItem.reduce((total, aliasListItem) => {
    return total + aliasListItem.harga * aliasListItem.quantity;
  }, 0);

  // kembali
  let kembali = 0;
  kembali = bayar - totalBayar;

  // tambah data pembayaran
  const addNewDataPayment = async () => {
    let kode_nota;
    await (listItem.length > 0 ? (kode_nota = listItem[0].kode_nota) : "");
    const newData = {
      total: totalBayar,
      bayar: bayar,
      kembali: kembali,
      kode_nota: kode_nota,
      tanggal: getDate(),
    };
    dispatch(newPayment(newData));
  };

  // set button disable
  const [btnDisable, setBtnDisable] = useState(false);

  // konfirmasi produk
  const handleClickConfirmProduct = async () => {
    if (kembali < 0) {
      return swal("Gagal!", "Pembayaran Kurang!", "error");
    } else if (totalBayar === 0) {
      return swal("Gagal!", "Silahkan Pilih Barang Terlebih Dahulu!", "error");
    } else {
      await addNewDataPayment();
      setBtnDisable(true);
    }
  };

  // reset data
  const resetData = () => {
    setBtnDisable(true);
    dispatch(deleteAllListItem());
    setBtnDisable(false);
    setBayar("");
  };

  // konfirmasi pembayaran
  const handleClickConfirmPayment = () => {
    const { harga, id_produk, kode_nota, nama_produk, quantity } =
      listItem[0];

    // console.log("listItem : ", id_produk);
    // console.log("listPayment : ", listPayment[0]);
    insertTransaksi({
      variables: {
        object: listPayment[0],
      },
    });

    insertNota({
      variables: {
        objects: [
          {
            nama_produk,
            harga,
            quantity,
            id_produk,
            kode_nota,
          },
        ],
      },
    });

    const upsertData = listItem.map((item) => {
      return {
        id: item.id_produk,
        nama_produk: item.nama_produk,
        harga: item.harga,
        stok: item.stok - item.quantity,
        gambar: " ",
      };
    });
    // console.log("upsertData : ", upsertData);
    upsertProduk({
      variables: {
        objects: upsertData,
      },
    });

    swal("Berhasil!", "Konfirmasi Pembayaran Berhasil!", "success");

    resetData();
  };

  return (
    <>
      <Col md={{ span: 4, offset: 8 }} className="fixed-bottom">
        <Card className="px-4 py-2">
          <div className="d-flex justify-content-between align-items-center  mt-2">
            <strong>Bayar </strong>
            <input
              type="number"
              min={totalBayar}
              onChange={(e) => setBayar(Number(e.target.value))}
              value={bayar || ""}
              className="form-control "
              style={{ width: "28%", height: "30px" }}
              placeholder=""
            />
          </div>
          <div className="d-flex justify-content-between mt-2 ">
            <strong>Total </strong>
            <strong className="">{toRupiah(totalBayar)}</strong>
          </div>
          <div className="d-flex justify-content-between mt-2">
            <strong>Kembali </strong>
            <strong className={kembali < 0 ? `text-danger ` : `text-primary `}>
              {toRupiah(kembali)}
            </strong>
          </div>

          <Button
            className={` mt-2 border-0 bg-warning ${
              !btnDisable ? `fw-bold text-white` : `fw-light`
            }`}
            onClick={handleClickConfirmProduct}
            disabled={btnDisable}
          >
            KONFIRMASI PRODUK
          </Button>

          <Button
            className={`my-1 btn ${
              !btnDisable
                ? `btn-outline-danger`
                : `bg-danger border-0 text-white`
            }`}
            disabled={!btnDisable}
            onClick={resetData}
          >
            CANCEL PEMBAYARAN
          </Button>
          <Button
            variant="outline-primary"
            className={`btn ${
              !btnDisable
                ? `btn-outline-primary`
                : `bg-primary border-0 text-white`
            }`}
            onClick={handleClickConfirmPayment}
            disabled={!btnDisable}
          >
            KONFIRMASI PEMBAYARAN
          </Button>
        </Card>
      </Col>
    </>
  );
};

export default Index;
