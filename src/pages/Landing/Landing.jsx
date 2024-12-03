import Carousel from "../../Components/Carousel/Carousel";
import Category from "../../Components/Categorys/Category.jsx";
import LayOut from "../../Layout/LayOut.jsx";
import Product from "../../Components/products/Product";
import React from "react";

const Landing = () => {
  return (
    <LayOut>
      <Carousel />
      <Category />
      <Product />
    </LayOut>
  );
};

export default Landing;
