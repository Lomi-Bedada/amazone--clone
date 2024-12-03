import Footer from "../Components/Footers/Footer";
import Header from "../Components/Headers/Header";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      {children}
      <Footer />
    </>
  );
};

export default Layout;
