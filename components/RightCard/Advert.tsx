import React from 'react'
import Image from 'next/image'
interface AdvertProps {

}

const Advert: React.FC<AdvertProps> = ({}) => {
        return (
            <div>
                <div>
                    <Image
                        src='/assets/BandanaSpiritualEdited_500x500.png'
                        height={99}
                        width={138}
                    />
                    <p>Vibe With These Face Shields!</p>
                    <p><span>$24.99</span> $6.95</p>
                </div>
                <button>ADD TO MY ORDER</button>
            </div>
        );
}


export default Advert