import React from "react";
import { NavbarComponent, SidebarComponent } from "../../component";
import { Container, Row, Col } from "react-bootstrap";
import { EditProdukComponent } from "../../component";

const EditProduct = () => {
  return (
    <>
      <NavbarComponent home={false} />
      <Container>
        <Row>
          <Col md={3}>
            <SidebarComponent />
          </Col>
          <Col md={9}>
            <EditProdukComponent />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EditProduct;
