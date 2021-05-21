import Image from 'next/image';
import React from 'react'

interface PaymentComponentProps {
    setIsComplete: (i: boolean) => void

}

const PaymentComponent: React.FC<PaymentComponentProps> = ({ setIsComplete}) => {
        return (
            <div className='payment-wrapper' >
                <div>
                    <p className='title'>Shipping method</p>
                    <input type="text" placeholder='Secured Shipping' />
                </div>
                <div>
                    <p  className='title' >Billing address</p>
                    <input type="text" placeholder='Same as shipping address' />
                    <input type="text" placeholder='Use a different billing address' />
                </div>
                <div>
                    <p  className='title'>Payment</p>
                    <small>All transactions are secured and encrypted</small>
                   <div>
                       <div>
                        <input type="checkbox" />
                        <p>Credit Card</p>
                       </div>
                         
                       <div>
                        <input type="text" placeholder='Card number' />
                        <input type="text" placeholder='Name on the card' />
                        <input type="text" placeholder='Month' />
                        <input type="text" placeholder='Year' />
                        <input type="text" placeholder='Security code' />
                       </div>
                   </div>
                   <div>
                    <div>
                        <input type="checkbox" />
                        <Image
                            src='/assets/paypal-icon.png'
                            height={29}
                            width={93}
                        />
                       </div>
                   </div>
                </div>
                <button className='submit-button' onClick={() => setIsComplete(true)} >Complete order</button>

            </div>
        );
}


export default PaymentComponent