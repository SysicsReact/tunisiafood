import React, { useState } from "react";

function MyComponent() {
  const [responseData, setResponseData] = useState(null);

  const handleApiCall = async () => {
    const url = "https://konnect.network/gateway/me/641bf7ab1403637d60f578db";
    const requestBody = {
      receiverWalletId: "642a7d6c2e9c6ea045f6f07b",
      token: "TND",
      amount: 10000,
      type: "immediate",
      description: "payment description",
      lifespan: 10,
      feesIncluded: true,
      firstName: "John",
      lastName: "Doe",
      phoneNumber: "22777777",
      email: "john.doe@gmail.com",
      orderId: "1234657",
      webhook: "https://merchant.tech/api/notification_payment",
      silentWebhook: true,
      successUrl: "https://dev.konnect.network/gateway/payment-success",
      failUrl: "https://dev.konnect.network/gateway/payment-failure",
      checkoutForm: true,
      acceptedPaymentMethods: [
        "wallet",
        "bank_card",
        "e-DINAR"
      ]
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
    });
    const jsonData = await response.json();
    setResponseData(jsonData);
  };

  return (
    <div>
      <button onClick={handleApiCall}>Call API</button>
      {responseData && (
        <pre>{JSON.stringify(responseData, null, 2)}</pre>
      )}
    </div>
  );
}

export default MyComponent;