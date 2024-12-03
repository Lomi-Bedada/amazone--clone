import Footer from "../Components/Footer/Footer";
import Header from "../Components/Headers/Header";
import React from "react";

const LayOut = ({ children }) => {
  return (
    <>
      <Header />

      {children}
      <Footer />
    </>
  );
};

export default LayOut;
