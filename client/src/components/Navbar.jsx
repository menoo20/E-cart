import React from 'react';
import styled from 'styled-components';




const Container = styled.div`
height: 60px;
`

const Wrapper = styled.div`
 padding: 10px 20px;
 display: flex;
 justify-content: space-between;
 align-items: center;
`
const Left = styled.div`
 flex: 1;
 display: flex;
 align-items: center;
`
const Center = styled.div`
 flex: 1;
 text-align: center;
`

const Logo = styled.h1`
 font-size: 31px;
 font-weight: bold;
`

const Right = styled.div`
 flex: 1;
 display: flex;
 align-items: center;
 justify-content: flex-end;
`
const Language = styled.span`
 font-size: 17px;
 padding:5px;
 cursor: pointer;
`

const SearchContainer = styled.div`
 border: .5px solid lightgrey;
 display: flex;
 padding: 5px;
 margin-left :20px;
`

const Input = styled.input`
 &:focus{
   box-shadow:none
 }
`
const MenuItem = styled.div`
 font-size: 14px;
 cursor: pointer;
 margin-left: 25px;
`

;

const Navbar = () => {
  return (
    <Container> 
        <Wrapper>
            <Left>
                <Language className='me-2'>EN</Language>
                <form className="d-flex ">
                  <Input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-primary" type="submit">Search</button>
                </form>
            </Left>
            <Center><Logo>E-CART</Logo></Center>
            <Right>
              <MenuItem>Register</MenuItem>
              <MenuItem>Sign In</MenuItem>
              <MenuItem>
                
              </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar