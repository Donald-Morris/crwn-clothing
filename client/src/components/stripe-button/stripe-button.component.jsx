import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51IXxPYJPoAp9pkOWMsFcQWoMm4NBgfV3NfqkMW5wFJ7MwHivyIpwzirAIO3bCeRrGbScCyqFIDAp16FSB7qzsN9q006hdBnUSN';

  const onToken = token => {
    console.log(token);
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then(response => {
        alert('Payment Successful');
      })
      .catch(error => {
        console.log('Payment error: ', JSON.parse(error));
        alert(
          'There was an issue with your payment. Please make sure you use the credit card provided'
        );
      });
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
