import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import {
  NavbarComponent,
  ListProductsComponent,
  ResultsComponent,
} from "../../component/index";
import { v4 as uuidv4 } from "uuid";
import { addUid } from "../../store/ListItemSlice";
// import { useGetDataProduct } from "../../hooks/index";
import { useSubscribeDataProduct } from "../../hooks/index";

const Index = () => {
  // graphql hooks getData
  // const { data, loading, error } = useGetDataProduct();

  // graphgl subscribeDataProduk
  const { data, loading, error } = useSubscribeDataProduct();

  // state produk
  const [product, setProduct] = useState();

  // store redux
  const listPayment = useSelector((state) => state.List.listPayment);
  const dispatch = useDispatch();

  // genetate uuid baru setiap ada listPayment
  const uuid = uuidv4();
  useEffect(() => {
    dispatch(addUid(uuid));
  }, [listPayment]);

  // setProduct dari data graphql
  useEffect(() => {
    if (data) {
      setProduct(data?.dikasir_Produk || []);
    }
  }, [data]);

  return (
    <>
      <NavbarComponent home={true} />
      <Container fluid>
        <Row className="mb-5">
          <Col md={1}></Col>
          <ListProductsComponent
            data={product || []}
            loading={loading}
            error={error}
          />
          <ResultsComponent />
        </Row>
      </Container>
    </>
  );
};

export default Index;
