import styled, { css } from 'styled-components'
import { fonts } from '../../globalStyles/fonts'
import { mediaQueries } from '../../mediaQueries/mediaQueries'
import Button from '../Buttons/Buttons'
import { Headings, Figures } from './IntroContent'

export const LearnMore = () => {
  return (
    <ContentWrapper>
      <Figures />
      <div>
        <Headings />
        <ButtonWrapper>
          <Button
            label='Learn more'
            type='button'
            isPrimary={true}
            onClick={() => {}}
          />
          <Button
            label='Can you trust us'
            type='button'
            isPrimary={false}
            onClick={() => {}}
          />
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
    display: flex;
    button {
      margin-right: 20px;
    }
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
