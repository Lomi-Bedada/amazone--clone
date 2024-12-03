import React, { useContext } from "react";

import CurrencyFormat from "../Currancyformaters/CurrancyFormater";
import { DataContext } from "../DataProviders/DataProvider";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import { Type } from "../../Utility/action.types";
import classes from "./product.module.css";

const ProductCard = ({ product, flex, renderDesc, renderAdd }) => {
  const { image, title, id, rating, price, description } = product;
  // console.log(product);

  const [state, dispatch] = useContext(DataContext);
  // console.log(state);

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        image,
        title,
        id,
        rating,
        price,
        description,
      },
    });
  };

  return (
    <section
      className={`${classes.card__container} ${
        flex ? classes.product__flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" className={classes.img_container} />
      </Link>

      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
        <div className={classes.rating}>
          {/* rating */}
          <Rating value={rating?.rate} precision={0.1} />
          {/*count  */}
          <small>{rating?.count}</small>
        </div>
        <div>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>
        {renderAdd && (
          <button className={classes.button} onClick={addToCart}>
            add to cart
          </button>
        )}
      </div>
    </section>
  );
};

export default ProductCard;
