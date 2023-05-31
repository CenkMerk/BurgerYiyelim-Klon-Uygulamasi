import React from "react";
import HelalSertifikasiImg from "./helalsertifikasi.png";
import SertifikaImg from "./SertifikaImg.png";

export const HelalSertifikasi = () => {
  return (
    <div className="container bg-white py-3 px-3 mt-5 rounded-1 bg-white animate__animated animate__fadeIn">
      <div className="position-relative">
        <img
          src={HelalSertifikasiImg}
          alt="HakkimizdaImg"
          width="100%"
          loading="lazy"
        />
        <h1 className="position-absolute bottom-0 end-0 fw-bolder text-white text-center">
          HELAL SERTİFİKALARI
        </h1>
      </div>
      <div className="pt-3 fst-italic">
        <h1>Burger Yiyelim</h1>
        <br />
        <p>
          Keban Et bünyesinde satış gerçekleştiren tüm şubeler, ürünlerini helal
          et sertifikası olan tedarikçilerden temin etmektedir.
        </p>
        <br />
        <p>
          Tedarikçilerimize ait helal et üretim sertifikalarını aşağıda
          görüntüleyebilirsiniz, üzerlerine tıklayarak büyütebilirsiniz.
        </p>
        <img
          src={SertifikaImg}
          alt="SertifikaImg"
          style={{ width: "100%", maxWidth: "300px" }}
          loading="lazy"
        />
      </div>
    </div>
  );
};
