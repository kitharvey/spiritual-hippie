import React from "react"
import generateKey from "../../helper/keyGen"
import Advert from "./Advert"
import Coupon from "./Coupon"
import Product from "./Product"
import SubTotal from "./SubTotal"

const productData = [
  {
    img: "/assets/shoe3-1.png",
    name: "Yin Yang Mandala",
    description: "Women's Aqua Barefoot Shoes",
    details: ["Black Sole", "US 9-10", "EU40-41"],
    price: 35,
    qnty: 1,
    isFree: true,
    key: generateKey("Yin Yang Mandala free"),
  },
  {
    img: "/assets/shoe2-1.png",
    name: "Yin Yang Mandala",
    description: "Women's Aqua Barefoot Shoes",
    details: ["Black Sole", "US 9-10", "EU40-41"],
    price: 35,
    qnty: 1,
    isFree: false,
    key: generateKey("Yin Yang Mandala"),
  },
  {
    img: "/assets/shoe1-1.png",
    name: "Watercolor Flowers",
    description: "Women's Aqua Barefoot Shoes",
    details: ["Black Sole", "US 9-10", "EU40-41"],
    price: 35,
    qnty: 2,
    isFree: false,
    key: generateKey("Watercolor Flowers"),
  },
  {
    img: "/assets/GiftYWV1.png",
    name: "Copy of Free Mystery Gift",
    details: ["Free Gift", "Vibrant Vibes", "One Size"],
    price: 0,
    qnty: 1,
    isFree: false,
    key: generateKey("Copy of Free Mystery Gift"),
  },
  {
    img: "/assets/SafeGuard.png",
    name: "Safeguard - Shipping Guarantee",
    description: "Safeguard shipping guarantee",
    details: [".98"],
    price: 0.98,
    qnty: 1,
    isFree: false,
    key: generateKey("Safeguard - Shipping Guarantee"),
  },
]

const RightCard = () => {
  return (
    <div className="right-card">
      <Advert />
      <div>
        {productData.map((product) => (
          <Product key={product.key} data={product} />
        ))}
      </div>
      <Coupon />
      <SubTotal />
    </div>
  )
}

export default RightCard
