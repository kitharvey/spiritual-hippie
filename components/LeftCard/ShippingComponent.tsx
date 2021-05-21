import React from 'react'

interface ShippingComponentProps {
    setIsPayment: (i: boolean) => void
}

const ShippingComponent: React.FC<ShippingComponentProps> = ({setIsPayment}) => {
        return (
            <div className='shipping-wrapper' >
                <div className='input-wrapper' >
                    <p className='title' >Contact Information</p>
                    <input type="email" placeholder='Email' />
                </div>
                <div className='input-wrapper'>
                    <p className='title'>Shipping Address</p>
                    <div className='grid-2' >
                     <input type="text" placeholder='First name' />
                     <input type="text" placeholder='Last name' />
                    </div>
                    <input type="text" placeholder='Address' />
                    <input type="text" placeholder='City' />
                    <div className='grid-3'>
                        <div className='select' >
                            <select>
                                <option>Select Country</option>
                            </select>
                        </div>
                        <div className='select'>
                            <select>
                                <option>Province</option>
                            </select>
                        </div>

                        <input type="text" placeholder='Postal Code' />
                    </div>
                    <input type="tel" placeholder='Phone number (optional)' />
                </div>
                <button className='submit-button' onClick={() => setIsPayment(true)} >CONTINUE TO PAYMENT</button>
            </div>
        );
}


export default ShippingComponent