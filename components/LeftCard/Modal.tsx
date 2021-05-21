import Image from "next/image"
import React from "react"
interface ModalProps {
  setIsComplete: (i: boolean) => void
}

const Modal: React.FC<ModalProps> = ({ setIsComplete }) => {
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <button className="close-button" onClick={() => setIsComplete(false)}>
          <Image src="/assets/Xbutton.svg" height={40} width={40} />
        </button>
        <p>Your Payment Method was declined.</p>
        <p>Please try another Payment Method.</p>
        <button className="submit-button" onClick={() => setIsComplete(false)}>
          ok, try another payment method
        </button>
      </div>
    </div>
  )
}

export default Modal
