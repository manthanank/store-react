import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripePay = React.memo(function StripePay({ price }) {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_live_51JdHwOSAf0b4SWtJabuJDTcqew3j9UlNDyR705qB7P7xzDjPbwJJ1sgUYohC0pBA4P1xU4MYNCnz0Z03bg4ph5MV00OaQGWKmH';

  const onToken = (token) => {
    console.log(token);
    alert("Payment is successful! Your order is placed.");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="SlashIndia furniture"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
});

export default StripePay;
