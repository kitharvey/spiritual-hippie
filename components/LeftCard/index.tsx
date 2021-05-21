import Image from 'next/image';
import React from 'react'
import PaymentComponent from './PaymentComponent';
import ShippingComponent from './ShippingComponent'

interface LeftCardProps {

}

const LeftCard: React.FC<LeftCardProps> = ({}) => {
        return (
            <div className='left-card' >
                <h1>Spiritual Hippie</h1>
                <button>Shipping</button>
                <button>Payment</button>
                <ShippingComponent/>
                <PaymentComponent/>
                <Image
                    src='/assets/Guaranteed_two.png'
                    height={120}
                    width={650}
                />
            </div>
        );
}


export default LeftCard