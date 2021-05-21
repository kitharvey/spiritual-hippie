import React from "react"
import { ImPriceTags } from "react-icons/im"
import { VscChromeClose } from "react-icons/vsc"
interface CouponProps {}

const Coupon: React.FC<CouponProps> = ({}) => {
  return (
    <div className="coupon-wrapper">
      <div className="input-wrapper">
        <input className="input" type="text" placeholder="Woohoo! Congrats!" />
        <button>Apply</button>
      </div>

      <div className="tag-wrapper">
        <ImPriceTags />
        <p>BOGO</p>
        <button>
            <VscChromeClose />
        </button>
      </div>
    </div>
  )
}

export default Coupon
