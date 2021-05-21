import Image from 'next/image';
import React from 'react'

interface ProductProps {

}

const Product: React.FC<ProductProps> = ({}) => {
        return (
            <div className='product' >
                <Image
                    src='/assets/Aquabarefootshoes-105yinyangmandala02586-Blk-YWV-STR1-1.png'
                    height={83}
                    width={157}
                />

                <div>
                    <p>Yin Yang Mandala</p>
                    <p>Women's Aqua Barefoot Shoes</p>
                    <div>
                        <p>Black Sole</p>
                        <p>US 9-10</p>
                        <p>EU40-41</p>
                    </div>
                </div>
                <p>$35.00</p>
            </div>
        );
}


export default Product