import styled, { css } from 'styled-components'
import { fonts } from '../../globalStyles/fonts'
import { mediaQueries } from '../../mediaQueries/mediaQueries'
import Button from '../Buttons/Buttons'

export interface Props {
  paragraph: string
  title: string
  imageUlr: string
}

export const IntroContent = ({ paragraph, title, imageUlr }) => {
  return (
    <ContentWrapper>
      <figure>
        <img src={imageUlr} alt='This is intro content image' />
      </figure>
      <div>
        <h3>{title}</h3>
        <p>{paragraph}</p>
        <ButtonWrapper>
          <Button label='Learn how it works' type='button' isPrimary={true} />
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
  figure {
    margin: 0;
    img {
      min-width: 100%;
      max-width: 100%;
      margin: auto;
      ${mediaQueries('lg', null)`
        max-width: 400px;
      `}
      ${mediaQueries('lmd', null)`
        max-width: 400px;
      `}
      ${mediaQueries('xl', null)`
        max-width: 550px;
      `}
    }
  }
  div {
    ${mediaQueries('lmd', null)`
      max-width: 618px;
    `}
    h3 {
      ${fonts}
      ${fontProps}
      font-family: Futura Std;
      font-size: 25px;
      line-height: 30px;

      ${mediaQueries('lmd', null)`
      font-size: 50px;
      line-height: 60px;
      margin-block-start: -4rem;
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
    margin-inline-end: 4rem;
    padding-top: 0;
  `}
`
