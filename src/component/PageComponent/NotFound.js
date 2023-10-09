import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container>
      <div
        className="d-flex flex-column justify-content-center align-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="fw-bold text-dark" style={{ fontSize: "10rem" }}>
          404
        </div>

        <div className="text-dark">Halaman Tidak ditemukan Klik</div>
        <Link to="/">
          <Button className="btn-danger mt-4">Home</Button>
        </Link>
      </div>
    </Container>
  );
};

export default NotFound;
