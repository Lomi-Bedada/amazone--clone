import React, { useEffect, useState } from "react";

import LayOut from "../../Layouts/Layout.jsx";
import Loader from "../../Components/Loading/Loader.jsx";
import ProductCard from "../../Components/Products/ProductCard.jsx";
import axios from "axios";
import { productURL } from "../../Api/endpoint.js";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();
  // console.log(productId);
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productURL}/products/${productId}`)
      .then((res) => {
        // console.log(res);
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard
          product={product}
          flex={true}
          renderDesc={true}
          renderAdd={true}
        />
      )}
    </LayOut>
  );
};

export default ProductDetail;
