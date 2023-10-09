import React from "react";
import { NavbarComponent, SidebarComponent } from "../../component";
import { Container, Row, Col } from "react-bootstrap";
import { InputProdukComponent } from "../../component";
const AddProduct = () => {
  return (
    <>
      <NavbarComponent home={false} />
      <Container>
        <Row>
          <Col md={3}>
            <SidebarComponent />
          </Col>
          <Col md={9}>
            <InputProdukComponent />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddProduct;
