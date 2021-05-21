import React from 'react'

interface ShippingComponentProps {

}

const ShippingComponent: React.FC<ShippingComponentProps> = ({}) => {
        return (
            <div>
                <div>
                    <p>Contact Information</p>
                    <input type="text" placeholder='Email' />
                </div>
                <div>
                    <p>Shipping Address</p>
                    <input type="text" placeholder='First name' />
                    <input type="text" placeholder='Last name' />
                    <input type="text" placeholder='Address' />
                    <input type="text" placeholder='City' />
                    <select>
                        <option>Select Country</option>
                    </select>
                    <select>
                        <option>Province</option>
                    </select>
                    <input type="text" placeholder='Postal Code' />
                    <input type="text" placeholder='Phone number (optional)' />
                </div>
                <button>CONTINUE TO PAYMENT</button>
            </div>
        );
}


export default ShippingComponent