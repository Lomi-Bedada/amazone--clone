import "./index.css";

import { initialState, reducer } from "./Utility/reducer";

import App from "./App";
import { DataProvider } from "./Components/DataProviders/DataProvider";
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataProvider reducer={reducer} initialState={initialState}>
      <App />
    </DataProvider>
  </React.StrictMode>
);
