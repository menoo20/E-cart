import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`

const

Arrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff7f7;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom:0;
  right: ${ ({direction})=> direction=== "right" && "10px"};
  left: ${ ({direction})=> direction=== "left" && "10px"};
  margin: auto;
  opacity: 0.5;
  cursor: pointer;
`,
 Wrapper = styled.div`
 height: 100%;
 display: flex;
 `,
 Slide = styled.div`
 display: flex;
 height: 100vh;
 width: 100vw;
 align-items: center;
 background-color: #${props=> props.bg}`,

 Img = styled.img`
  height: 80%;
  margin-left: 80px;
 `,

 ImgContainer = styled.div`
 flex: 1;
 height: 100%
 `,
 InfoContainer = styled.div`
 flex: 1;
 padding: 50px`,

Title = styled.h1`
 font-size: 70px;
`,
Desc = styled.p`
 margin: 50px 0px;
 font-size: 20px;
 font-weight: 500;
 letter-spacing: 3px
`,
Button = styled.button`
 padding: 10px;
 font-size: 20px;
 background: transparent;
 cursor: pointer;
`


const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
          <ArrowLeftOutlined />
        </Arrow>
        <Wrapper>
         <Slide bg="faf5fd">
            <ImgContainer>
             <Img src="https://thumbs.dreamstime.com/b/indian-man-ethnic-wear-shopping-bags-isolated-over-white-background-128551770.jpg" />
            </ImgContainer>
            <InfoContainer>
               <Title>Summer Sale</Title>
               <Desc>Don't Compromise On Style! Get Flat 30% OFF For New Arrivals</Desc>
               <Button>Shop Now</Button>
            </InfoContainer>
         </Slide>
         <Slide bg="fcf1ed">
            <ImgContainer>
             <Img src="https://thumbs.dreamstime.com/b/indian-man-ethnic-wear-shopping-bags-isolated-over-white-background-128551770.jpg" />
            </ImgContainer>
            <InfoContainer>
               <Title>Winter Sale</Title>
               <Desc>Don't Compromise On Style! Get Flat 30% OFF For New Arrivals</Desc>
               <Button>Shop Now</Button>
            </InfoContainer>
         </Slide>
         <Slide bg="fbf0f4">
            <ImgContainer>
             <Img src="https://thumbs.dreamstime.com/b/indian-man-ethnic-wear-shopping-bags-isolated-over-white-background-128551770.jpg" />
            </ImgContainer>
            <InfoContainer>
               <Title>Winter Sale</Title>
               <Desc>Don't Compromise On Style! Get Flat 30% OFF For New Arrivals</Desc>
               <Button>Shop Now</Button>
            </InfoContainer>
         </Slide>
         </Wrapper>
        <Arrow direction="right">
          <ArrowRightOutlined />
        </Arrow>
    </Container>
  )
}

export default Slider
