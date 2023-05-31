import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeItem, increase, descrease } from "../../Control/CartSlice";

export const SepetItem = ({ id, title, price, quantity, img }) => {
  const dispatch = useDispatch();
  return (
    <div className="d-flex flex-row shadow rounded-2 p-1 align-items-center gap-1">
      <div style={{ width: "50px" }}>
        <img src={img} alt="" width="100%" />
      </div>
      <div className="d-flex flex-column justify-content-evenly">
        <h6>{title}</h6>
        <h6>₺{price}</h6>
      </div>
      <div className="d-flex flex-column align-items-center ms-auto justify-content-between gap-1">
        <button
          className="btn btn-light py-0 px-1"
          onClick={() => {
            dispatch(increase(id));
          }}
        >
          <AiOutlinePlus />
        </button>
        <p className="m-0 fw-bold">{quantity}</p>
        {quantity > 1 ? (
          <button
            className="btn btn-light py-0 px-1"
            onClick={() => {
              dispatch(descrease(id));
            }}
          >
            <AiOutlineMinus />
          </button>
        ) : (
          <button
            className="btn btn-danger py-0 px-1"
            onClick={() => {
              dispatch(removeItem(id));
            }}
          >
            Sil
          </button>
        )}
      </div>
    </div>
  );
};
