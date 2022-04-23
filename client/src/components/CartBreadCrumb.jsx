import React from 'react'
import "../style/BreadCrumb.scss"

const CartBreadCrumb = ({img, cat, catDesc}) => {
  return (
    <section className="breadcrumb-section set-bg" style={{height: "350px"}}>
        <div className="bg-layout"><img src={img} alt="" /></div>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="breadcrumb__text">
                        <h1>My <span>Cart</span></h1>
                        <p>{catDesc}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}

export default CartBreadCrumb