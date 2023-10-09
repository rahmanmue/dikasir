import React from "react";

const Loading = () => {
  return (
    <div
      className="d-flex justify-content-center align-content-center align-items-center"
      style={{ height: "50vh" }}
    >
      <div
        className="spinner-border text-danger"
        role="status"
        style={{ width: "3rem", height: "3rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
