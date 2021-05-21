import React from 'react'
import Advert from './Advert'
import Coupon from './Coupon'
import Product from './Product'
import SubTotal from './SubTotal'

interface RightCardProps {

}

const RightCard: React.FC<RightCardProps> = ({}) => {
        return (
            <div className='right-card'>
                <Advert />

                <div>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>

                <Coupon />

                <SubTotal />
            </div>
        );
}


export default RightCard