import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import {
  CardComponent,
  ErrorComponent,
  LoadingComponent,
  NoDataComponent,
} from "../index";
import { searchIcon } from "../../assets";
import { filterProduct } from "../../utils/index";

const Index = ({ data, loading, error }) => {
  // state serach
  const [searchInput, setSearchInput] = useState("");

  // state filter untuk data produk
  const [dataFilterProduct, setFilterProduct] = useState([]);

  // handle perubahan set search input
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  // handleclick search
  const handleClick = () => {
    setFilterProduct(
      filterProduct({
        dataProduct: data,
        searchInput: searchInput,
        toTable: false,
      })
    );
  };

  // component didupdate ketika ada data dan searchinput
  useEffect(() => {
    handleClick();
  }, [data, searchInput]);

  return (
    <>
      <Col md={7} className="mt-4 m">
        <Row>
          <Col md={6}>
            <div className="input-group mb-3">
              <input
                type="search"
                className="form-control"
                placeholder="Cari Nama Produk ..."
                aria-label="cari"
                aria-describedby="cari"
                onChange={handleChange}
              />
              <span
                className="input-group-text bg-primary"
                id="cari"
                onClick={handleClick}
              >
                <img src={searchIcon} alt="search-icon" />
              </span>
            </div>
          </Col>
        </Row>
        <Row>
          {loading ? (
            <LoadingComponent />
          ) : error ? (
            <ErrorComponent />
          ) : dataFilterProduct.length !== 0 ? (
            dataFilterProduct.map((item) => (
              <CardComponent key={item.id} data={item} />
            ))
          ) : (
            <NoDataComponent />
          )}
        </Row>
      </Col>
    </>
  );
};
export default Index;
