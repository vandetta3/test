import React from "react";
import logo from "../../logo.svg";
import { Button, Select } from "antd";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import "./header.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MainHeader = () => {
  const navigate = useNavigate();
  const { cartCount = 0 } = useSelector((state) => ({
    cartCount: state.Products?.cartcount,
  }));
  return (
    <div className="header-wrapper">
      <img
        style={{ width: 50, marginTop: 10 }}
        src={logo}
        alt="eg"
        onClick={() => {
          navigate("/home");
        }}
      />
      <Select
        className="search-bar"
        showSearch
        placeholder={"Search"}
        defaultActiveFirstOption={false}
        showArrow={false}
        filterOption={false}
        onSearch={() => {}}
        onChange={() => {}}
        notFoundContent={null}
        options={[]}
      />
      <div className="header-tabs">
        <Button type="icon">
          {" "}
          <span
            style={{
              color: "red",
              margin: "0px",
              position: "absolute",
              top: "10%",
              left: "60%",
              transform: "translate(-50%, -50%)",
            }}
          >
            {cartCount}
          </span>
          <ShoppingCartOutlined
            style={{ fontSize: 28 }}
            onClick={() => {
              navigate("/cart");
            }}
          />
        </Button>
        <UserOutlined
          style={{ fontSize: 24 }}
          onClick={() => {
            navigate("/myprofilepage");
          }}
        />
      </div>
    </div>
  );
};

export default MainHeader;
