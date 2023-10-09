import React, { useState } from "react";
import {
  NavbarComponent,
  SidebarComponent,
  DashboardComponent,
  LoadingComponent,
  ErrorComponent,
} from "../../component";
import { Container, Row, Col } from "react-bootstrap";
import {
  useSubscribeJumlahProduk,
  useSubscribeJumlahStok,
  useSubscribeJumlahTransaksi,
  useSubscribePengeluaran,
  useSubscribePemasukan,
  useSubscribeDataProduct,
} from "../../hooks";
import { useEffect } from "react";

const Dashboard = () => {
  const { data: jP, loading: lP, error: errP } = useSubscribeJumlahProduk();
  const { data: jS, loading: lS, error: errS } = useSubscribeJumlahStok();
  const {
    data: jTs,
    loading: lTs,
    error: errTs,
  } = useSubscribeJumlahTransaksi();
  const { data: jPl, loading: lPl, error: errPl } = useSubscribeDataProduct();
  const { data: jPm, loading: lPm, error: errPm } = useSubscribePemasukan();

  const [produk, setProduk] = useState();
  const [stok, setStok] = useState();
  const [transaksi, setTransaksi] = useState();
  const [pengeluaran, setPengeluaran] = useState();
  const [pembayaran, setPembayaran] = useState();

  useEffect(() => {
    if (jP || jS || jTs || jPl || jPm) {
      setProduk(jP?.dikasir_Produk_aggregate || []);
      setStok(jS?.dikasir_Produk_aggregate || []);
      setTransaksi(jTs?.dikasir_Transaksi_aggregate || []);
      setPengeluaran(jPl?.dikasir_Produk || []);
      setPembayaran(jPm?.dikasir_Transaksi_aggregate || []);
    }
  }, [jP, jS, jTs, jPl, jPm]);

  const jumlahProduk = produk?.aggregate?.count || "0";
  const jumlahSemuaStok = stok?.aggregate?.sum?.stok || "0";
  const jumlahTransaksi = transaksi?.aggregate?.count || "0";
  const jumlahPembayaran = pembayaran?.aggregate?.sum?.total || "";
  let totalHargaSemuaProduk = 0;
  totalHargaSemuaProduk = pengeluaran?.reduce((total, aliasListItem) => {
    return total + aliasListItem.harga * aliasListItem.stok;
  }, 0);

  // console.log(p);
  // console.log(q);
  // console.log(r);
  // console.log(s);
  // console.log(t);

  if (lP || lS || lTs || lPl || lPm) {
    return <LoadingComponent />;
  } else if (errP || errPl || errPm || errS || errTs) {
    return <ErrorComponent />;
  } else if (jP || jS || jTs || jPl || jPm) {
    return (
      <>
        <NavbarComponent home={false} />
        <Container fluid>
          <Row>
            <Col md={2}>
              <SidebarComponent />
            </Col>
            <Col md={9}>
              <DashboardComponent
                jP={jumlahProduk}
                jS={jumlahSemuaStok}
                jTs={jumlahTransaksi}
                jPl={totalHargaSemuaProduk}
                jPm={jumlahPembayaran}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
};

export default Dashboard;
