import Image from "next/image"
import React from "react"

export interface ProductType {
  img: string
  name: string
  description?: string
  details: string[]
  price: number
  qnty: number
  isFree: boolean
  key: string
}

interface ProductProps {
  data: ProductType
}

const Product: React.FC<ProductProps> = ({ data }) => {
  const { img, name, description, details, price, qnty, isFree } = data

  return (
    <div className="product">
      <div className="img-wrapper">
        <Image src={img} height={83} width={157} alt={name} />
        <div className="qnty">{qnty}</div>
      </div>

      <div className="info">
        <p className="name">{name}</p>
        {description && <p className="description">{description}</p>}
        <div className="details">
          {details.map((detail) => (
            <p key={detail}>{detail}</p>
          ))}
        </div>
      </div>
      <div className="price-wrapper">
        <p className={isFree ? "no-price" : "price"}>${price.toFixed(2)}</p>
        {isFree && <p className="free">FREE</p>}
      </div>
    </div>
  )
}

export default Product
