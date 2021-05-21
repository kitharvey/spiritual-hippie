import React from "react"
import { ImPriceTags } from "react-icons/im"

interface SubTotalProps {}

const SubTotal: React.FC<SubTotalProps> = ({}) => {
  return (
    <div className='total-wrapper' >
      <div className='subtotal-wrapper' >
        <div className='flex-row' >
          <p>Subtotal</p>
          <p>$105.98</p>
        </div>
        <div className='flex-row'>
          <p className='' >
            <span>Discount&nbsp;&nbsp;</span>
            <span><ImPriceTags />&nbsp;BOGO</span>
          </p>
          <p>-$35.00</p>
        </div>
        <div className='flex-row'>
          <p>Shipping</p>
          <p>Calculated at next step</p>
        </div>
      </div>
      <div className='total flex-row' >
        <p>Total</p>
        <p>
          <span>USD</span>$70.98
        </p>
      </div>
    </div>
  )
}

export default SubTotal
