import React from 'react'

interface CouponProps {


}

const Coupon: React.FC<CouponProps> = ({}) => {
        return (
            <div>
                <div>
                    <input type="text" />
                    <button>Apply</button>
                </div>

                <div>
                    <p>BOGO x</p>
                </div>

            </div>
        );
}


export default Coupon