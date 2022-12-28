import { Button, Card, Spin, Tabs, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setProductById } from "../redux/products/actions";
import { getCategory, getProduct } from "../services/products";

const Home = () => {
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState(0);

  const { Title, Text } = Typography;

  const {
    category = [],
    products = [],
    productsLoading = false,
  } = useSelector((state) => ({
    category: state.Products?.category,
    products: state.Products?.products,
    productsLoading: state.Products?.productLoading,
  }));

  const tabChangeHandler = (key) => {
    console.log(key);
    setTabValue(key);
  };

  const Spinner = () => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "80vh",
        alignItems: "center",
      }}
    >
      <Spin size="large" />
    </div>
  );

  useEffect(() => {
    getCategory();
  }, []);

  useEffect(() => {
    if (category?.length) getProduct(category[tabValue]);
  }, [tabValue, category]);

  return (
    <div>
      <Tabs
        centered
        onChange={tabChangeHandler}
        defaultActiveKey="1"
        tabPosition={"top"}
        items={
          category?.map((item, index) => {
            return {
              label: item,
              key: index,
            };
          }) || []
        }
      />

      {productsLoading && <Spinner />}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px 20px",
          flexWrap: "wrap",
          marginTop: "10px",
          marginRight: "50px",
          marginLeft: "50px",
        }}
      >
        {products &&
          products?.map((item) => {
            return (
              <Card
                hoverable
                style={{ width: 260, padding: "20px" }}
                onClick={() => {
                  setProductById(item);
                  navigate(`/products/${item.id}`);
                }}
                cover={
                  <img
                    style={{ height: 200 }}
                    alt="example"
                    src={item?.image}
                  />
                }
              >
                <Title level={5}>{item.title}</Title>
                <Text>{item.description.slice(0, 100)}...</Text>
                <Title level={5}>${item.price}</Title>
                <Button
                  type="primary"
                  style={{ width: "100%", marginTop: "20px" }}
                >
                  Buy Now
                </Button>
              </Card>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
