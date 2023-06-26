const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");

admin.initializeApp();
const fetch = require("node-fetch");
const app = express();

app.use(cors({origin: true}));
app.use(express.json());

app.post("/handleApiCall", async (req, res) => {
  const {refid, priceFinal} = req.body;
  const url = "https://api.konnect.network/api/v2/payments/init-payment";
  const requestBody = {
    receiverWalletId: "642a7d6c2e9c6ea045f6f07b",
    token: "EUR",
    amount: priceFinal,
    type: "immediate",
    lifespan: 10,
    feesIncluded: false,
    orderId: refid,
    webhook: false,
    silentWebhook: true,
    successUrl: `https://cooktounsi.com/CheckoutSuccess?refid=${refid}`,
    failUrl: "https://dev.konnect.network/gateway/payment-failure",
    checkoutForm: false,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "642a7d6c2e9c6ea045f6f078:jgC3FXE949N3BANhFUUVD6rluv",
      },
      body: JSON.stringify(requestBody),
    });

    if (response.status === 204) {
      res.sendStatus(204);
    } else {
      // Handle the response here
      const data = await response.json();
      // Do something with the data or send it as a response
      res.json(data);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

exports.handleApiCall = functions.https.onRequest(app);
