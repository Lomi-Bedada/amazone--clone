import Carousel from "../../Components/Carousel/Carousel.jsx";
import Category from "../../Components/Categorys/Category.jsx";
import LayOut from "../../layout/LayOut.jsx";
import Product from "../../Components/products/Product.jsx";
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
