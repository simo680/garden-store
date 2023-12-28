import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import CategoriesPage from "./pages/CategoriesPage";
import ProductsPage from "./pages/ProductsPage";
import ProductItemPage from "./pages/ProductItemPage";
import BasketPage from "./pages/BasketPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./App.scss";  

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/categories/all" element={<CategoriesPage />}></Route>
          <Route path="/categories/:id" ></Route>
          <Route path="/products" element={<ProductsPage/>}></Route>
          <Route path="/products/sales"></Route>
          <Route path="/products/:id" element={<ProductItemPage />}></Route>
          <Route path="/basket" element={<BasketPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
