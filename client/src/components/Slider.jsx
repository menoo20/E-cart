import styled from 'styled-components';

const Wrapper = styled.div`
 height: 60vh;
 overflow-y: hidden;
`

const CarouselIndicators = styled.div`
 top: 55vh;
 bottom: 0;
`

const Slider = () => {
  return (
  <Wrapper>
<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <CarouselIndicators className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </CarouselIndicators>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img src="https://m.media-amazon.com/images/I/71jxq4iGLNL._SX3000_.jpg" className="d-block w-100" alt="..."></img>
    </div>
    <div className="carousel-item">
    <img src="https://m.media-amazon.com/images/I/61Kadf2nvsL._SX3000_.jpg" className="d-block w-100" alt="..."></img>
    </div>
    <div className="carousel-item">
    <img src="https://m.media-amazon.com/images/I/71RK7p+lPjL._SX3000_.jpg" className="d-block w-100" alt="..."></img>
    </div>
  </div>
</div>
  </Wrapper>
  )
}

export default Slider

