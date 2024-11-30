const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_KEY);
const app = express();

// CORS setup
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Success !",
  });
});

app.post("/payment/create", async (req, res) => {
  const total = parseInt(req.query.total);

  if (total > 0) {
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
      });
      res.status(201).json({
        clientSecret: paymentIntent.client_secret,
      });
    } catch (error) {
      console.error("Error creating payment intent:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(403).json({
      message: "Total must be greater than 0",
    });
  }
});

// Check if STRIPE_KEY is defined
// if (!process.env.STRIPE_KEY) {
//   console.error("Stripe key is not set in environment variables");
// }

exports.api = onRequest(app);

//Import function triggers from their respective submodules:

// const { onCall } = require("firebase-functions/v2/https");
// const { onDocumentWritten } = require("firebase-functions/v2/firestore");
//   See a full list of supported triggers at https://firebase.google.com/docs/functions

// const { onRequest } = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");
// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");

// dotenv.config();
// const stripe = require("stripe")(process.env.STRIPE_KEY);
// const app = express();
// // app.use(cors({ origin: true }));
// app.use(cors());
// app.use(express.json());
// app.get("/", (req, res) => {
//   res.status(200).json({
//     message: "Success !",
//   });
// });

// app.post("/payment/create", async (req, res) => {
//   const total = parseInt(req.query.total);

//   if (total > 0) {
//     // console.log("payment resieved", total);
//     // // res.send(total);//
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: total,
//       currency: "usd",
//     });
//     console.log(paymentIntent);
//     res.status(201).json({
//       clientSecret: paymentIntent.client_secret,
//     });
//   } else {
//     res.status(403).json({
//       message: "total must be greater than 0",
//     });
//   }
// });

// exports.api = onRequest(app);
