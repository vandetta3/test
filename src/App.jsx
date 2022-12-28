import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import MainHeader from "./components/Header/Header";
import Router from "./route";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <Layout>
              <Header
                style={{
                  background: "#ffffff",
                  borderBottom: "1px solid #d9d9d9",
                }}
              >
                <MainHeader />
              </Header>
              <Content style={{ background: "#ffffff" }}>
                <Router />
              </Content>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
