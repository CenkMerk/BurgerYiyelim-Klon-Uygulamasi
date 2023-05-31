import React from "react";
import InsanKaynaklariImg from "./InsankaynaklariImg.png";

export const InsanKaynaklari = () => {
  return (
    <div className="container bg-white py-3 px-3 mt-5 rounded-1 animate__animated animate__fadeIn">
      <div className="position-relative">
        <img
          src={InsanKaynaklariImg}
          alt="HakkimizdaImg"
          width="100%"
          loading="lazy"
        />
        <h1 className="position-absolute bottom-0 end-0 fw-bolder text-white text-center">
          İNSAN KAYNAKLARI
        </h1>
      </div>
      <form class="d-flex flex-column gap-2 needs-validation mt-3" novalidate>
        <div>
          <label htmlFor="validationCustom01" className="form-label">
            Adınız
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom01"
            required
          />
        </div>
        <div>
          <label htmlFor="validationCustom01" className="form-label">
            Soyadınız
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom02"
            required
          />
        </div>
        <div>
          <label htmlFor="validationCustom01" className="form-label">
            E-posta
          </label>
          <input
            type="email"
            className="form-control"
            id="validationCustom03"
            required
          />
        </div>
        <div>
          <label htmlFor="validationCustom01" className="form-label">
            Başvurduğunuz Pozisyon
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom04"
            required
          />
        </div>
        <div>
          <button className="btn btn-primary mt-5" type="submit">
            Gönder
          </button>
        </div>
      </form>
    </div>
  );
};
