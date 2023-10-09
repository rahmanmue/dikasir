import React from "react";
import { minusIcon, plusIcon, deleteIcon } from "../../assets";
import {
  deleteListItem,
  increment,
  decrement,
} from "../../store/ListItemSlice";
import { useDispatch, useSelector } from "react-redux";
import { toRupiah } from "../../utils/index";

const Index = ({ item, index }) => {
  // props item dari komponen result
  const { namaProduk, harga, id_produk } = item;

  // store redux
  const dispatch = useDispatch();
  const listItem = useSelector((state) => state.List.listItem);

  // set quantity dari store redux
  const quantity = listItem[index].quantity;

  return (
    <div
      className="d-flex justify-content-between py-2"
      style={{ boxSizing: "border-box" }}
    >
      <div className="d-flex flex-column justify-content-center">
        <div>
          <strong className="title-item">{namaProduk}</strong>
        </div>
        <div>
          <span>{toRupiah(harga)}</span>
        </div>
      </div>
      <div className="d-flex align-items-center ms-auto me-5">
        <div type="button" onClick={() => dispatch(decrement(index))}>
          <img src={minusIcon} alt="minus" />
        </div>
        <div
          className="px-4 mx-2"
          style={{ boxSizing: "border-box", width: "50px" }}
        >
          <strong>{`${quantity}`}</strong>
        </div>

        <div type="button" onClick={() => dispatch(increment(index))}>
          <img src={plusIcon} alt="plus" />
        </div>
      </div>
      <div className="d-flex align-items-center ">
        <div type="button" onClick={() => dispatch(deleteListItem(id_produk))}>
          <img src={deleteIcon} alt="delete" />
        </div>
      </div>
    </div>
  );
};

export default Index;
