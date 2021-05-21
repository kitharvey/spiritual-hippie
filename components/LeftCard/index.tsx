import Image from 'next/image';
import React, { useState } from 'react'
import Modal from './Modal';
import PaymentComponent from './PaymentComponent';
import ShippingComponent from './ShippingComponent'

interface LeftCardProps {

}

const LeftCard: React.FC<LeftCardProps> = ({}) => {
    const [isPayment, setIsPayment]= useState<boolean>(false)
    const [isComplete, setIsComplete] = useState<boolean>(false)
        return (
            <div className='left-card' >
                <h1>Spiritual Hippie</h1>
                <div className='buttons-wrapper' >
                    <button 
                        className={isPayment ? 'idle' : 'active'}
                        onClick={() => setIsPayment(false)}
                    >
                        <span>Shipping</span>
                    </button>
                    <button 
                        className={isPayment ? 'active' : 'idle'}
                        onClick={() => setIsPayment(true)}
                    >
                        <span>Payment</span>
                    </button>
                </div>

                {isPayment ? <PaymentComponent setIsComplete={setIsComplete} /> : <ShippingComponent setIsPayment={setIsPayment} />  }
                
                <Image
                    src='/assets/Guaranteed_two@2x.png'
                    height={120}
                    width={650}
                />

                {isComplete && <Modal setIsComplete={setIsComplete}/>}
            </div>
        );
}


export default LeftCard