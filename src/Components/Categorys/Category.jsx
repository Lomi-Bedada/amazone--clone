import CategoryCard from "./CategoryCard";
import React from "react";
import { categoryImage } from "./categoryIndex";
import classes from "./catagory.module.css";

const Category = () => {
  return (
    <section className={classes.category_container}>
      {categoryImage.map((infos) => (
        <CategoryCard key={infos.name} data={infos} /> // Ensure a unique key is provided
      ))}
    </section>
  );
};

export default Category;
