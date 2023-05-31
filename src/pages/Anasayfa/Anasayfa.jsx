import React from "react";
import Hakkimizda from "./img/hakkimizda.jpg";
import Urunler from "./img/urunler.jpg";
import Helal from "./img/helal.jpg";
import Iletisim from "./img/iletisim.jpg";
import Puankazan from "./img/puankazan.png";
import Subeler from "./img/subeler.jpg";
import Veganburger from "./img/veganburger.jpg";
import { NavLink } from "react-router-dom";

export const Anasayfa = () => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row animate__animated animate__fadeIn">
          <div className="col-md-6 ">
            <NavLink to="/urunler">
              <img
                src={Veganburger}
                alt="Veganburger"
                width="100%"
                loading="lazy"
              />
            </NavLink>
          </div>
          <div className="col-md-6">
            <NavLink to="/urunler">
              <img
                src={Puankazan}
                alt="Puankazan"
                width="100%"
                loading="lazy"
              />
            </NavLink>
          </div>
        </div>
        <div className="row animate__animated animate__fadeIn">
          <div className="col position-relative ">
            <NavLink to="/urunler">
              <img src={Urunler} alt="Urunler" width="100%" loading="lazy" />
              <h1 className="position-absolute top-50 start-50 translate-middle fw-bolder text-white">
                ÜRÜNLER
              </h1>
            </NavLink>
          </div>
        </div>
        <div className="row py-2 align-items-center g-1 animate__animated animate__fadeIn">
          <div className="col-lg-3 col-md-6 col-12 position-relative ">
          <NavLink to="/helalsertifikasi">
            <img src={Helal} alt="Helal" width="100%" loading="lazy" />
            <h1 className="position-absolute top-50 start-50 translate-middle fw-bolder text-white text-center">
              HELAL SERTİFİKASI
            </h1>
            </NavLink>
          </div>
          <div className="col-lg-3 col-md-6 col-12 position-relative">
          <NavLink to="/hakkimizda">
            <img
              src={Hakkimizda}
              alt="Hakkimizda"
              width="100%"
              loading="lazy"
            />
            <h1 className="position-absolute top-50 start-50 translate-middle fw-bolder text-white text-center">
              HAKKIMIZDA
            </h1>
            </NavLink>
          </div>
          <div className="col-lg-3 col-md-6 col-12 position-relative ">
          <NavLink to="/subelerimiz">
            <img src={Subeler} alt="Subeler" width="100%" loading="lazy" />
            <h1 className="position-absolute top-50 start-50 translate-middle fw-bolder text-white text-center">
              ŞUBELER
            </h1>
            </NavLink>
          </div>
          <div className="col-lg-3 col-md-6 col-12 position-relative ">
          <NavLink to="/iletisim">
            <img src={Iletisim} alt="Iletisim" width="100%" loading="lazy" />
            <h1 className="position-absolute top-50 start-50 translate-middle fw-bolder text-white text-center">
              İLETİŞİM
            </h1>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
