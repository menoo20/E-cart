import React from 'react'
import { Link} from 'react-router-dom'

export const CartIcon = () => {
  return (
    <Link to={"/cart"}>
      <div className="cart cursor-pointer">
          <i className="bi bi-cart-plus-fill"></i>
      </div>
    </Link>

  )
}
