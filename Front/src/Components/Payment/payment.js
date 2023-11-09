import React from 'react'
import "./payment.css"

function payment() {
  return (
    <div className='payme'>
<div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Payment Method</title>
  <link rel="stylesheet" href="styles.css" />
  <div className="payment-container">
    <h2>Select a Payment Method</h2>
    <div className="payment-method">
      <label htmlFor="credit-card">
        <input type="radio" id="credit-card" name="payment" defaultValue="credit-card" />
        <img src="credit-card-icon.png" alt="Credit Card" />
        Credit Card
      </label>
    </div>
    <div className="payment-method">
      <label htmlFor="paypal">
        <input type="radio" id="paypal" name="payment" defaultValue="paypal" />
        <img src="paypal-icon.png" alt="PayPal" />
        PayPal
      </label>
    </div>
<div className="payment-method">
  <label htmlFor="cash-on-delivery">
    <input type="radio" id="cash-on-delivery" name="payment" defaultValue="cash-on-delivery" />
    <button className="payment-button">I will pay at home when the delivery man comes</button>
  </label>
</div>


  </div>
</div>


    </div>
  )
}

export default payment