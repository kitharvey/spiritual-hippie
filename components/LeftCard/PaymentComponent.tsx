import Image from "next/image"
import React from "react"

interface PaymentComponentProps {
  setIsComplete: (i: boolean) => void
}

const PaymentComponent: React.FC<PaymentComponentProps> = ({ setIsComplete }) => {
  return (
    <div className="payment-wrapper">
      <div className="input-wrapper">
        <p className="title">Shipping method</p>
        <div className="input header">
          <input type="radio" id="creditcard" value="creditcard" name="ship-method" />
          <p>Secured Shipping</p>
        </div>
      </div>
      <div className="input-wrapper">
        <p className="title">Billing address</p>
        <div className="input header">
          <input type="radio" id="creditcard" value="creditcard" name="ship-add" />
          <p>Same as shipping address</p>
        </div>
        <div className="input header">
          <input type="radio" id="creditcard" value="creditcard" name="ship-add" />
          <p>Use a different billing address</p>
        </div>
      </div>
      <div className="input-wrapper payment">
        <p className="title">Payment</p>
        <small>All transactions are secured and encrypted</small>
        <div className="creditcard-wrapper">
          <div className="input header">
            <input
              className="input"
              type="radio"
              id="creditcard"
              value="creditcard"
              name="payment"
            />
            <p>Credit Card</p>
          </div>
          <div className="cc-input-wrapper">
            <input className="input" type="text" placeholder="Card number" />
            <input className="input" type="text" placeholder="Name on the card" />
            <div className="grid-3">
              <input className="input" type="text" placeholder="Month" />
              <input className="input" type="text" placeholder="Year" />
              <input className="input" type="text" placeholder="Security code" />
            </div>
          </div>
        </div>
        <div>
          <div className="input header">
            <input type="radio" id="paypal" value="paypal" name="payment" />
            <Image src="/assets/paypal-icon.png" height={29} width={93} />
          </div>
        </div>
      </div>
      <div
        role="button"
        tabIndex={-4}
        aria-hidden="true"
        className="submit-button"
        onClick={() => setIsComplete(true)}
      >
        Complete order
      </div>
    </div>
  )
}

export default PaymentComponent
