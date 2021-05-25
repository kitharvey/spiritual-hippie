import Image from "next/image"
import React from "react"

interface ModalProps {
  setIsComplete: (i: boolean) => void
}

const Modal: React.FC<ModalProps> = ({ setIsComplete }) => {
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <div
          role="button"
          tabIndex={-2}
          aria-hidden="true"
          className="close-button"
          onClick={() => setIsComplete(false)}
        >
          <Image src="/assets/Xbutton.svg" height={40} width={40} />
        </div>
        <p>Your Payment Method was declined.</p>
        <p>Please try another Payment Method.</p>
        <div
          role="button"
          tabIndex={-3}
          aria-hidden="true"
          className="submit-button"
          onClick={() => setIsComplete(false)}
        >
          ok, try another payment method
        </div>
      </div>
    </div>
  )
}

export default Modal
