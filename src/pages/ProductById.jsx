import { Button, Card, Image, InputNumber, Typography } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/products/actions";

const ProductById = () => {
  const navigate = useNavigate();
  const [itemValue, setItemValue] = useState(1);

  const { product = {}, cartCount = 0 } = useSelector((state) => ({
    product: state.Products?.productById,
    cartCount: state.Products?.cartcount,
  }));

  const { Title, Text } = Typography;

  return (
    <div style={{ padding: "30px" }}>
      <Button
        onClick={() => {
          navigate("/home");
        }}
      >
        {"< Back to shopping"}
      </Button>
      <Card style={{ marginTop: "20px" }}>
        <div style={{ display: "flex", gap: "20px" }}>
          {" "}
          <Image style={{ height: 400, width: "auto" }} src={product?.image} />
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            {" "}
            <Title level={3}>{product.title}</Title>
            <Text>{product.description}</Text>
            <Title level={5}>${product.price}</Title>
            <InputNumber
              value={itemValue}
              onChange={(value) => setItemValue(value)}
              defaultValue={1}
            />
            <Button
              type="primary"
              style={{ width: "100px" }}
              onClick={() => addToCart(cartCount + itemValue)}
            >
              Add to cart
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductById;
