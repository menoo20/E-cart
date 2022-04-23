import React, { useEffect, useState } from 'react'
import Styled from "styled-components"

const Button = Styled.button`
    padding: 10px 40px;
    font-weight: bold;
    letter-spacing: 1px;
`

const ShopnowBtn = ({color, content="Shop Now"}) => {

  return (
    <Button className={`btn ${color}`}>{content}</Button>
  )
}

export default ShopnowBtn