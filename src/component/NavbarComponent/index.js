import React from "react";
import { logoIcon } from "../../assets/index";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Index = ({ home }) => {
  if (home) {
    return (
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img src={logoIcon} alt="logo" height="45" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link to="/dashboard" className="text-decoration-none">
                <div className="nav-link pe-5 ">Dashboard</div>
              </Link>
              <Link to="/produk" className="text-decoration-none">
                <div className="nav-link pe-5 ">Produk</div>
              </Link>
              <Link to="/transaksi" className="text-decoration-none">
                <div className="nav-link pe-5 ">Riwayat Transaksi</div>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  } else {
    return (
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logoIcon} alt="logo" height="45" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <div className="ms-auto">
              <Link to="/" className="text-decoration-none">
                <Button className="bg-transparent border border-white rounded me-2 px-4">
                  MENU KASIR
                </Button>
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
};
export default Index;
