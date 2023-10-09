import React, { useEffect, useState } from "react";
import { Col, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addListItem } from "../../store/ListItemSlice";
import { addIcon } from "../../assets";
import { toRupiah } from "../../utils/index";
import { useSelector } from "react-redux";

const Index = ({ data }) => {
  // props data dari komponen list produk
  const { namaProduk, stok, harga, gambar, id } = data;

  // store redux
  const dispatch = useDispatch();
  const listPayment = useSelector((state) => state.List.listPayment);

  // ambil data uuid dari store redux
  const uuid = useSelector((state) => state.List.uuid);

  // state newList
  const [newList, setNewList] = useState();

  // fungsi addData untuk update setiap list baru
  const addData = (kodeNota) => {
    const list = {
      id_produk: id,
      namaProduk: namaProduk,
      harga: harga,
      quantity: 1,
      kodeNota: kodeNota,
      stok: stok,
    };
    setNewList(list);
  };

  // update perubahan uuid ke addData ketika ada perubahan dari listpayment
  useEffect(() => {
    addData(uuid);
  }, [listPayment]);

  // handleClick untuk menambah list item ke store redux
  const handleClickAddListItem = () => {
    dispatch(addListItem(newList));
  };

  return (
    <Col md={4} className="mt-4 px-3 ">
      <Card className="rounded-5 shadow-card">
        <Card.Img variant="top" src={gambar} />
        <Card.Body>
          <div className="text-capitalize fw-bold">{namaProduk}</div>
          <div className="my-2"> Stok : {stok}</div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="text-capitalize my-2 fw-bolder">
              {toRupiah(harga)}
            </div>

            <button
              type="button"
              className="btn bg-warning"
              onClick={handleClickAddListItem}
            >
              <img src={addIcon} alt="tambah" width={15} />
            </button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Index;
