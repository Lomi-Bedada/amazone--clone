import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Auth from "./pages/Auth/Auth";
import Cart from "./pages/Cart/Cart";
import { Elements } from "@stripe/react-stripe-js";
import Landing from "./Pages/Landing/Landing";
import Orders from "./Pages/Orders/Orders";
import Payment from "./pages/Payment/payment";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Results from "./Components/Results/Result";
import { loadStripe } from "@stripe/stripe-js";

// import React from "react";

// Load Stripe outside of a component’s render to avoid recreating the instance on every render
const stripePromise = loadStripe(
  "pk_test_51QQCvvI5pDWPSC7Rsdrt2WigPyuIc5N96ti8iZtA0RwVJWDh3y684JunFDawBtkujj6bPq8zFgvHcfVb8USY3VHL00sCD0glQN"
);

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/payments"
          element={
            <ProtectedRoute msg={"You must log in to pay"} redirect={"/auth"}>
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute
              msg={"You must log in to access your orders"}
              redirect={"/auth"}
            >
              <Orders />
            </ProtectedRoute>
          }
        />
        <Route path="/Category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default Routing;
