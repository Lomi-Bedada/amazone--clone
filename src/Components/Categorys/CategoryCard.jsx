import { Link } from "react-router-dom";
import React from "react";
import classes from "./catagory.module.css";

const CategoryCard = ({ data }) => {
  // console.log(data);
  return (
    <div className={classes.category}>
      <Link to={`/category/${data.name}`}>
        <span>
          <h2>{data?.title}</h2>
        </span>
        <img src={data?.imgLink} alt="" />
        <p>shop now</p>
      </Link>
    </div>
  );
};

export default CategoryCard;
