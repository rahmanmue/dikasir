import React, { useEffect, useState } from "react";
import {
  NavbarComponent,
  SidebarComponent,
  TabelRincianComponent,
} from "../../component";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useGetDataNotaWhereKodeNota } from "../../hooks";

const Index = () => {
  let { kodeNota } = useParams();

  const { data, loading, error } = useGetDataNotaWhereKodeNota(kodeNota);

  const [rincian, setRincian] = useState();
  // set data ke state
  useEffect(() => {
    if (data) {
      setRincian(data?.dikasir_Transaksi || []);
    }
  }, [data]);

  console.log(data);
  return (
    <>
      <NavbarComponent home={false} />
      <Container fluid>
        <Row>
          <Col md={2}>
            <SidebarComponent />
          </Col>
          <Col md={9}>
            <TabelRincianComponent
              data={rincian}
              loading={loading}
              error={error}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
