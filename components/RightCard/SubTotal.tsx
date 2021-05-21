import React from 'react'

interface SubTotalProps {

}

const SubTotal: React.FC<SubTotalProps> = ({}) => {
        return (
            <div>
                <div>
                    <div>
                        <p>Subtotal</p>
                        <p>$105.98</p>
                    </div>
                    <div>
                        <p>Discount</p>
                        <p>-$35.00</p>
                    </div>
                    <div>
                        <p>Shipping</p>
                        <p>Calculated at next step</p>
                    </div>
                </div>
                <div>
                    <p>Total</p>
                    <p><span>USD</span>$70.98</p>
                </div>
            </div>
        );
}


export default SubTotal