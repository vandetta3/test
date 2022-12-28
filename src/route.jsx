import { Navigate, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import MyProfilePage from "./pages/MyProfilePage";
import ProductById from "./pages/ProductById";

function Router() {
  return (
    <Routes>
      <Route path={"home"} element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/myprofilepage" element={<MyProfilePage />} />
      <Route path="/products/:id" element={<ProductById />} />

      <Route path="/" element={<Navigate to={"home"} />} />
    </Routes>
  );
}

export default Router;
