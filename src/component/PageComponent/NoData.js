import React from "react";
import { Container } from "react-bootstrap";
import { noDataIcon } from "../../assets";

const NoData = () => {
  return (
    <Container>
      <div
        className="d-flex gap-4 justify-content-center align-content-center align-items-center"
        style={{ height: "50vh" }}
      >
        <img
          src={noDataIcon}
          alt="no-data"
          className="img-fluid"
          width={"10%"}
        />
        <div className="fw-bold text-dark">Data Tidak Ditemukan ....</div>
      </div>
    </Container>
  );
};

export default NoData;
