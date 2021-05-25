import Image from "next/image"
import React, { useState } from "react"
import Modal from "./Modal"
import PaymentComponent from "./PaymentComponent"
import ShippingComponent from "./ShippingComponent"

const LeftCard = () => {
  const [isPayment, setIsPayment] = useState<boolean>(false)
  const [isComplete, setIsComplete] = useState<boolean>(false)
  return (
    <div className="left-card">
      <h1>Spiritual Hippie</h1>
      <div className="buttons-wrapper">
        <div
          role="button"
          tabIndex={0}
          aria-hidden="true"
          className={isPayment ? "idle" : "active"}
          onClick={() => setIsPayment(false)}
        >
          <span>Shipping</span>
        </div>
        <div
          role="button"
          tabIndex={-1}
          aria-hidden="true"
          className={isPayment ? "active" : "idle"}
          onClick={() => setIsPayment(true)}
        >
          <span>Payment</span>
        </div>
      </div>

      {isPayment ? (
        <PaymentComponent setIsComplete={setIsComplete} />
      ) : (
        <ShippingComponent setIsPayment={setIsPayment} />
      )}

      <Image src="/assets/Guaranteed_two@2x.png" alt="Guaranteed" height={120} width={650} />

      {isComplete && <Modal setIsComplete={setIsComplete} />}
    </div>
  )
}

export default LeftCard
