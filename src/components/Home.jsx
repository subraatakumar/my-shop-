import React, { useContext } from "react";
import { ProductContext } from "../main";
import { Flex } from "@chakra-ui/react";
import SingleProductCard from "./SingleProductCard";
function Home() {
  const { products } = useContext(ProductContext);
  return (
    <Flex wrap="wrap" justify="space-between">
      {products.map((product, index) => {
        return <SingleProductCard key={index} product={product} />;
      })}
    </Flex>
  );
}

export default Home;
