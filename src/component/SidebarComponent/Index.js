import React from "react";
import { Button } from "react-bootstrap";
import { dashboardIcon, produkIcon, transaksiIcon } from "../../assets";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="mt-4 ">
      <div className="d-flex flex-column gap-2 align-items-lg-start align-items-center">
        <Button
          className="bg-dark border-0  menu-button"
          style={{ width: "85%" }}
        >
          <Link to="/dashboard" className="text-decoration-none text-white">
            <div className=" d-flex align-items-center  gap-2 px-2 ">
              <img src={dashboardIcon} alt="dashboard" width={26} />
              <div>Dashboard</div>
            </div>
          </Link>
        </Button>
        <Button
          className="bg-dark border-0 menu-button"
          style={{ width: "85%" }}
        >
          <Link to="/produk" className="text-decoration-none text-white">
            <div className=" d-flex align-items-center  gap-2 px-2 ">
              <img src={produkIcon} alt="produk" width={26} />
              <div>Produk</div>
            </div>
          </Link>
        </Button>
        <Button
          className="bg-dark border-0 menu-button"
          style={{ width: "85%" }}
        >
          <Link to="/transaksi" className="text-decoration-none text-white">
            <div className=" d-flex align-items-center  gap-2 px-2 ">
              <img src={transaksiIcon} alt="transaksi" width={26} />
              <div>Transaksi</div>
            </div>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;
