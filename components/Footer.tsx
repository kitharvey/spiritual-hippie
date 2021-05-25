import React from "react"
import Link from "next/link"

const Footer = () => {
  return (
    <footer>
      <Link href="/">
        <a className="brand">Spiritual Hippie</a>
      </Link>
      <div className="footer-menu">
        <Link href="/Support">
          <a>Support</a>
        </Link>
        <Link href="/Track Order">
          <a>Track Order</a>
        </Link>
        <Link href="/Privacy Policy">
          <a>Privacy Policy</a>
        </Link>
        <Link href="/Terms of Service">
          <a>Terms of Service</a>
        </Link>
      </div>
    </footer>
  )
}

export default Footer
