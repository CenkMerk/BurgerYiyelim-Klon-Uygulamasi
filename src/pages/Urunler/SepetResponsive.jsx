import React from "react";
import {AiOutlineShoppingCart} from "react-icons/ai"
import { Sepet } from "./Sepet";

export const SepetResponsive = () => {
  return (
    <div>
      <button
        className="btn position-absolute"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
        style={{border:"none", backgroundColor:"#940c00", color:"white", top:"-20px", right:"15px"}}
      >
        <AiOutlineShoppingCart size={25}/>
      </button>

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel"></h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <Sepet/>
        </div>
      </div>
    </div>
  );
};
