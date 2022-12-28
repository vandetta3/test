import { Button, Card } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: "30px" }}>
      <Button
        onClick={() => {
          navigate("/home");
        }}
      >
        {"< Back to shopping"}
      </Button>
      <Card style={{ marginTop: "20px" }}>comming soon</Card>
    </div>
  );
};

export default Cart;
