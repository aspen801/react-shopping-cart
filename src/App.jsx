import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import CartPage from "./pages/CartPage/CartPage";
import CartProvider from "./context/CartContext";

function App() {
  
  return (
    <>
      <CartProvider>
        <Header />
        <ToastContainer />
        <Routes>
          <Route path={"/"} element={<HomePage />}/>
          <Route path={"/cart"} element={<CartPage />}/>
        </Routes>
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
