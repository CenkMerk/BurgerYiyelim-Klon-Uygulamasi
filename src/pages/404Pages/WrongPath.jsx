import React from "react";

export const WrongPath = () => {
  return (
    <div
      className="container d-flex flex-column justify-content-center align-items-center"
      style={{
        height:"90vh"
      }}
    >
      <h1 className="fw-bolder">404</h1>
      <div className="fw-bolder">Page not found</div>
    </div>
  );
};
