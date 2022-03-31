import React from 'react';
import styled from 'styled-components';
import Search from '@material-ui/icons/Search'; 
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';



<Badge badgeContent={4} color="primary">
  <MailIcon color="action" />
</Badge>

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
 
`

const Right = styled.div`
 flex: 1;
 display: flex;
 align-items: center;
 justify-content: flex-end;
`
const Language = styled.span`
 font-size: 14px;
 cursor: pointer;
`

const SearchContainer = styled.div`
 border: .5px solid lightgrey;
 display: flex;
 padding: 5px;
 margin-left :20px;
`

const Input = styled.input`
 border: none;
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
                <Language>EN</Language>
                  <SearchContainer>
                   <Input/>
                   <Search style={{color: 'grey', fontSize: '17px'}}/>
                </SearchContainer>
            </Left>
            <Center><Logo>E-CART</Logo></Center>
            <Right>
              <MenuItem>Register</MenuItem>
              <MenuItem>Sign In</MenuItem>
              <MenuItem>
                <Badge badgeContent={4} color="primary">
                  <MailIcon />
                </Badge>
              </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar