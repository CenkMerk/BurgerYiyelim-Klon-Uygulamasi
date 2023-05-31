import React from "react";

export const Iletisim = () => {
  return (
    <div className="container bg-white py-3 px-3 mt-5 rounded-1 animate__animated animate__fadeIn">
      <h1 style={{ color: "#db1e38" }}>Bize Yazın</h1>
      <form class="d-flex flex-column gap-2 needs-validation mt-3" novalidate>
        <div>
          <label
            htmlFor="validationCustom01"
            className="form-label fw-bold"
            style={{ color: "#db1e38" }}
          >
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
          <label
            htmlFor="validationCustom01"
            className="form-label fw-bold"
            style={{ color: "#db1e38" }}
          >
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
          <label
            htmlFor="validationCustom01"
            className="form-label fw-bold"
            style={{ color: "#db1e38" }}
          >
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
          <label
            htmlFor="validationCustom01"
            className="form-label fw-bold"
            style={{ color: "#db1e38" }}
          >
            Mesajınızın Konusu
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom04"
            required
          />
        </div>
        <div>
          <label
            for="validationTextarea"
            class="form-label fw-bold"
            style={{ color: "#db1e38" }}
          >
            Mesajınız
          </label>
          <textarea
            class="form-control"
            id="validationTextarea"
            required
          ></textarea>
        </div>
        <div>
          <button
            className="btn mt-5 fw-bold fs-5"
            type="submit"
            style={{backgroundColor:"#db1e38",color:"white", width:"100%"}}
          >
            Gönder
          </button>
        </div>
      </form>
    </div>
  );
};
