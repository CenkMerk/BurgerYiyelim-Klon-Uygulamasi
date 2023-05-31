import React from "react";
import "./Urunler.css";
import UrunlerData from "./UrunlerData";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addItem } from "../../Control/CartSlice";
import { Sepet } from "./Sepet";
import { SepetResponsive } from "./SepetResponsive";

export const Urunler = () => {
  const dispatch = useDispatch();
  const Data = UrunlerData;
  return (
    <div className="container mt-5 position-relative">
      <div className="row">
        <div className="Kategoriler col-lg-3 animate__animated animate__fadeInLeft">
          <div id="list-example" className="list-group bg-white pt-3">
            <h5 className="ps-3">Ürünler</h5>
            {Data.map((item) => {
              return (
                <a
                  className="list-group-item list-group-item-action d-flex gap-2 align-items-baseline"
                  href={`#${item.id}`}
                  key={item.id}
                >
                  <div>{item.Ikon}</div>
                  <h6>{item.KategoriAdi}</h6>
                </a>
              );
            })}
          </div>
        </div>
        <div className="col-lg-6 col-12 animate__animated animate__fadeIn">
          <div
            data-bs-spy="scroll"
            data-bs-target="#list-example"
            data-bs-smooth-scroll="true"
            className="scrollspy-example container"
            tabIndex="0"
          >
            {Data.map((kategori) => {
              return (
                <div
                  key={kategori.id}
                  id={kategori.id}
                  className="row bg-white my-4 py-2 px-1 rounded-2"
                >
                  <h4>{kategori.KategoriAdi}</h4>
                  {kategori.Urunler.map((urun, index) => {
                    return (
                      <div className="col-md-4 col-12 py-2 UrunDiv rounded-1" key={index}>
                        <img
                          className="rounded-2"
                          src={urun.Img.type}
                          alt="img"
                          width="100%"
                          loading="lazy"
                        />
                        <h6 className="text-truncate pt-2">{urun.UrunAdi}</h6>
                        <div className="d-flex justify-content-between align-items-baseline">
                          <h5>₺{urun.Fiyati}</h5>
                          <button
                            className="btn btn-secondary"
                            onClick={() => {
                              dispatch(
                                addItem([
                                  urun.id,
                                  urun.UrunAdi,
                                  urun.Fiyati,
                                  urun.Img.type,
                                ])
                              );
                            }}
                          >
                            <AiOutlinePlus size={20} />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
        <div className="SepetComponent col-lg-3 bg-white pt-3 rounded-2 py-2 animate__animated animate__fadeInRight">
          <Sepet />
        </div>
        <div className="SepetResponsiveComponent">
          <SepetResponsive />
        </div>
      </div>
    </div>
  );
};
