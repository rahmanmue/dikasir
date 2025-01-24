import React from "react";
import { Container } from "react-bootstrap";
import { serverErrorIcon } from "../../assets";

const Error = () => {
  return (
    <Container>
      <div
        className="d-flex flex-column gap-4 justify-content-center align-content-center align-items-center"
        style={{ height: "50vh" }}
      >
        <img
          src={serverErrorIcon}
          alt="no-data"
          className="img-fluid"
          width={"20%"}
        />
        <div className="fw-bold text-dark mt-2">
          Internal Server Error...
        </div>
      </div>
    </Container>
  );
};

export default Error;
