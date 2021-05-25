import React from "react"
import Image from "next/image"

const Advert = () => {
  return (
    <div className="advert">
      <div className="top">
        <Image
          src="/assets/BandanaSpiritualEdited_500x500.png"
          alt="Bandana Spiritual Edited"
          height={99}
          width={138}
        />
        <div className="details">
          <p className="name">Vibe With These Face Shields!</p>
          <p className="price">
            <span>$24.99</span> $6.95
          </p>
        </div>
      </div>
      <div role="button" tabIndex={-6} aria-hidden="true" onClick={() => {}}>
        ADD TO MY ORDER
      </div>
    </div>
  )
}

export default Advert
