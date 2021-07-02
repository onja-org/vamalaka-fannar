import styled from 'styled-components'
import { fonts } from '../../globalStyles/fonts';
import Baobab from '../LeftSide/images/baobab.png';
import Farmer from '../LeftSide/images/farmer.png'

const Container = styled.div` 
  margin: auto;
  background-size: cover;
  text-align: center;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  max-width: 583.5px;
  
  p {
    ${fonts};
    font-family: 'Futura Std', sans-serif ;
    color: #FFFFFF;
    font-size: 40px;
    line-height: 48px;
    max-width: 528px;
    padding: 226px 0 241px 42px;
  }
`;

export interface LeftSideProps {
  backgroundImage?: string,
}

export const LeftSide: React.FC<LeftSideProps> = ({ backgroundImage }) => {

  const linearGradient = `linear-gradient(0deg, rgba(4, 29, 66, 0.1), rgba(4, 29, 66, 0.1))`;
  const baobabBackground = `${linearGradient},url(${Baobab})`
  const farmerBackground = `${linearGradient},url(${Farmer})`
  const background = backgroundImage === 'Baobab' ? baobabBackground : farmerBackground;

  return (
    <Container style={{ backgroundImage: background }}  >
      <p>Discover amazing products and profit from a truly fair market</p>
    </Container>
  )
};