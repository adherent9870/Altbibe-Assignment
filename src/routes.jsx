import { Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";

import ProductDetail from "./pages/Productdetail";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ProductsPage />} />
      <Route path="/products/:id" element={<ProductDetail />} />
    </Routes>
  );
}
export default AppRoutes;
