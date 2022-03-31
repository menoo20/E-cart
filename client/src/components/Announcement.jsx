import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
 background: teal;
 color: white;
 height: 30px;
 display: flex;
 font-weight: bold;
 align-items: center;
 justify-content: center;
 font-size: 14px;
`


const Announcement = () => {
  return (
    <Container>
        Super Deal! Free Shipping for Orders over 50$
    </Container>
  )
}

export default Announcement