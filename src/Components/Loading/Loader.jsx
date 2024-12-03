import React from "react";
import { ScaleLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      style={{
        height: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ScaleLoader color="#36d7b7" />
    </div>
  );
};

export default Loader;
