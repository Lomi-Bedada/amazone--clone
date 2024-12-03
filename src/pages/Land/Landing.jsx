import Carousel from "../../Components/Carousel/Carousel.jsx";
import Category from "../../Components/Categorys/Category.jsx";
import Layout from "../../Layouts/LayOut.jsx";
import Product from "../../Components/products/Product.jsx";
import React from "react";

const Landing = () => {
  return (
    <Layout>
      <Carousel />
      <Category />
      <Product />
    </Layout>
  );
};

export default Landing;
