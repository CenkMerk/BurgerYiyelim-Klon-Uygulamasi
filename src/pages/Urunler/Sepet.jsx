import React from "react";
import "./Urunler.css";
import { AiOutlineDelete } from "react-icons/ai";
import { useSelector } from "react-redux";
import { SepetItem } from "./SepetItem";
import { useDispatch } from "react-redux";
import { clearCart } from "../../Control/CartSlice";
import SepetImg from "./Img/sepetimg.png";

export const Sepet = () => {
  const { selectItems, total, quantity } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const HandleClick = () => {
    alert(`Toplam ${total} TL ödeme yapıldı`);
    dispatch(clearCart());
  };
  return (
    <>
      {quantity === 0 ? (
        <>
          <h5>SEPETİM</h5>
          <img src={SepetImg} alt="SepetImg" width="100%" className="p-5" />
          <p className="text-center fw-bold" style={{ color: "#c2c2c2" }}>
            Sepetiniz Şuan Boş
          </p>
        </>
      ) : (
        <>
          <div className="d-flex justify-content-between align-items-baseline">
            <h5>SEPETİM</h5>
            <button
              className="btn"
              onClick={() => {
                dispatch(clearCart());
              }}
            >
              <AiOutlineDelete size={20} />
            </button>
          </div>
          <div className="CartItemContainer d-flex flex-column gap-2 py-3 px-1">
            {selectItems.map((item) => {
              return <SepetItem {...item} key={item.id} />;
            })}
          </div>
          <div
            className="mt-auto pt-2"
            style={{ borderTop: "1px solid black" }}
          >
            <div className="d-flex justify-content-between align-items-center">
              <h6>Toplam Tutar</h6>
              <h4>₺{total}</h4>
            </div>
            <button className="btn btn-success w-100" onClick={HandleClick}>
              Sepeti Onayla
            </button>
          </div>
        </>
      )}
    </>
  );
};
