import React from "react";
import "./Subelerimiz.css";
import SubelerData from "./SubelerData";
import { useState } from "react";

export const Subelerimiz = () => {
  const [selectedValue, setSelectedValue] = useState(2);
  const data = SubelerData;
  const handleChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedValue(selectedValue);
  };
  return (
    <div className="container mt-5 mb-5 pt-5 rounded-4 bg-white animate__animated animate__fadeIn" style={{maxWidth:"700px"}}>
      <h5>Lütfen Sipariş Vermek İstediğiniz İli Seçiniz:</h5>
      <select
        defaultValue={2}
        className="form-select"
        aria-label="Default select example"
        onChange={handleChange}
      >
        {data.map((item) => {
          return (
            <option value={item.id} key={item.id}>
              {item.Sehir}
            </option>
          );
        })}
      </select>
      <div className="list-group py-5">
        {data[selectedValue - 1].Sube.map((item) => {
          return (
            <>
              <a
              href="#"
                className="list-group-item list-group-item-action d-flex justify-content-between flex-column flex-md-row gap-2 pb-3"
              >
                <div className="SubeInfo">
                  <h6>{item.SubeAdi}</h6>
                  <span>{item.Adresi}</span>
                </div>
                <div className="d-flex align-items-center gap-1">
                  {item.GelAl && (
                    <button
                      className="SubeButton"
                      style={{ backgroundColor: "#d3251c" }}
                    >
                      GEL-AL SİPARİŞ
                    </button>
                  )}
                  {item.AdreseTeslim && (
                    <button
                      className="SubeButton"
                      style={{ backgroundColor: "#acb47f" }}
                    >
                      ADRESE TESLİM
                    </button>
                  )}
                </div>
              </a>
            </>
          );
        })}
      </div>
    </div>
  );
};
