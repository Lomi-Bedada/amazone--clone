import React, { useEffect, useState } from "react";

import LayOut from "../../Layouts/Layout";
import Loader from "../Loading/Loader";
import ProductCard from "../Products/ProductCard";
import axios from "axios";
import classes from "./results.module.css";
import { productURL } from "../../Api/endpoint";
import { useParams } from "react-router-dom";

const Results = () => {
  const [results, setResults] = useState([]);
  const { categoryName } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  // console.log(categoryName);

  useEffect(() => {
    axios
      .get(`${productURL}/products/category/${categoryName}`)
      .then((res) => {
        // console.log(res);
        setResults(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>category/{categoryName}</p>
        <hr />

        {isLoading ? (
          <Loader />
        ) : (
          <div className={classes.products_container}>
            {results?.map((product) => (
              <ProductCard
                key={product.id}
                renderDesc={false}
                renderAdd={true}
                product={product}
              />
            ))}
          </div>
        )}
      </section>
    </LayOut>
  );
};

export default Results;
