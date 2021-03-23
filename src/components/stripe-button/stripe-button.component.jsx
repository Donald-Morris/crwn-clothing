import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51IXxPYJPoAp9pkOWMsFcQWoMm4NBgfV3NfqkMW5wFJ7MwHivyIpwzirAIO3bCeRrGbScCyqFIDAp16FSB7qzsN9q006hdBnUSN';

  const onToken = token => {
    console.log(token);
    alert('PAYMENT SUCCESSFUL');
  };
  return (
    <StripeCheckout
      label='PAY NOW'
      name='CRWN CLOTHING LTD'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='PAY NOW'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
