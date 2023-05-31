import React from "react";
import FranchisingImg from "./FranchisingImg.jpg";

export const Franchising = () => {
  return (
    <div className="container bg-white py-3 px-3 mt-5 rounded-1 bg-white animate__animated animate__fadeIn">
      <div className="position-relative">
        <img
          src={FranchisingImg}
          alt="HakkimizdaImg"
          width="100%"
          loading="lazy"
        />
        <h1 className="position-absolute bottom-0 end-0 fw-bolder text-white text-center">
          FRANCHİSİNG BAŞVURUSU
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
            Franchise açmayı düşündüğünüz İl:
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
