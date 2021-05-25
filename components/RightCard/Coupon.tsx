import React from "react"
import { ImPriceTags } from "react-icons/im"
import { VscChromeClose } from "react-icons/vsc"

const Coupon = () => {
  return (
    <div className="coupon-wrapper">
      <div className="input-wrapper">
        <input className="input" type="text" placeholder="Woohoo! Congrats!" />
        <div className="button" role="button" tabIndex={-10} aria-hidden="true">
          Apply
        </div>
      </div>

      <div className="tag-wrapper">
        <ImPriceTags />
        <p>BOGO</p>
        <div className="button" role="button" tabIndex={-7} aria-hidden="true">
          <VscChromeClose />
        </div>
      </div>
    </div>
  )
}

export default Coupon
