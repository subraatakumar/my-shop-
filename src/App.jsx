import { useContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SingleProduct from "./components/SingleProduct";
import { ProductContext } from "./main";
import axios from "axios";
import SingleProductCard from "./components/SingleProductCard";
import { Flex } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
function App() {
  const { products, setProducts } = useContext(ProductContext);

  useEffect(() => {
    // component did mount fase
    axios.get(`${import.meta.env.VITE_API_BASE_URL}products`).then((data) => {
      setProducts(data?.data?.products);
    });
  }, []);

  useEffect(() => {
    // component did update
    console.log("Product updated", products);
  }, [products]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<SingleProduct />} />
      </Routes>
    </>
  );
}

export default App;
