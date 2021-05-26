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
        <label className="input header">
          <input type="radio" id="creditcard" value="creditcard" name="ship-method" />
          <span>Secured Shipping</span>
        </label>
      </div>
      <div className="input-wrapper">
        <p className="title">Billing address</p>
        <label className="input header">
          <input type="radio" id="creditcard" value="creditcard" name="ship-add" />
          <span>Same as shipping address</span>
        </label>
        <label className="input header">
          <input type="radio" id="creditcard" value="creditcard" name="ship-add" />
          <span>Use a different billing address</span>
        </label>
      </div>
      <div className="input-wrapper payment">
        <p className="title">Payment</p>
        <small>All transactions are secured and encrypted</small>
        <div className="creditcard-wrapper">
          <label className="input header">
            <input
              className="input"
              type="radio"
              id="creditcard"
              value="creditcard"
              name="payment"
            />
            <span>Credit Card</span>
          </label>
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
          <label className="input header">
            <input type="radio" id="paypal" value="paypal" name="payment" />
            <span>
              <Image src="/assets/paypal-icon.png" height={29} width={93} />
            </span>
          </label>
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
