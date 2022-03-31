import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: coral;
`

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff7f7;
`

const Slider = () => {
  return (
    <Container>
        <Arrow>
          <ArrowLeftOutlined/>
        </Arrow>
        <Arrow>
          <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider