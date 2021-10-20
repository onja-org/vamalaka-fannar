import styled, { css } from 'styled-components'
import { fonts } from '../../globalStyles/fonts'
import { mediaQueries } from '../../mediaQueries/mediaQueries'
import Button from '../Buttons/Buttons'
import IntroImage from '../../assets/introImage.png'
import { Link } from 'react-router-dom'
import { Paths } from '../../paths'

export const Figures = () => {
  return (
    <figure>
      <img src={IntroImage} alt='content of how it works ' />
    </figure>
  )
}

export const Headings = () => {
  return (
    <>
      <div>
        <h3>Madagascars peer-to-peer e-commerce platform</h3>
        <p>
          Purchase high-quality products made by the people that sell them. By
          cutting out middlemen, you know exactly where your purchase is from
          how it was made.
        </p>
      </div>
    </>
  )
}

export const IntroContent = () => {
  return (
    <ContentWrapper>
      <Figures />
      <div>
        <Headings />
        <ButtonWrapper>
          <Link to={`${Paths.HOW_IT_WORKS}`}>
            <Button label='Learn how it works' type='button' isPrimary={true} />
          </Link>
        </ButtonWrapper>
      </div>
    </ContentWrapper>
  )
}
const fontProps = css`
  color: #041d42;
  font-style: normal;
  font-weight: normal;
`
const ButtonWrapper = styled.div`
  display: none;
  ${mediaQueries('lmd', null)`
    display: block;
  `}
`

const ContentWrapper = styled.div`
  margin: 1rem;
  figure {
    margin: 0;
    img {
      min-width: 100%;
      max-width: 100%;
      margin: auto;
      ${mediaQueries('lg', null)`
        padding-top: 4rem;
        max-width: 400px;
      `}
      ${mediaQueries('lmd', null)`
        max-width: 400px;
      `}
      ${mediaQueries('xl', null)`
        padding-top: 4rem;
        max-width: 550px;
      `}
    }
  }
    h3 {
      ${fonts}
      ${fontProps}
      font-family: Futura Std;
      font-size: 25px;
      line-height: 30px;

      ${mediaQueries('lmd', null)`
      font-size: 50px;
      line-height: 60px;

    `}
    }

    p {
      ${fonts}
      ${fontProps}
      font-family: Garamond;
      font-size: 20px;
      line-height: 22px;

      ${mediaQueries('xl', null)`
      font-size: 35px;
      line-height: 39px;
      `}
    }
  }
  ${mediaQueries('xl', null)`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 40px;
    padding-top: 0;
  `}
`
