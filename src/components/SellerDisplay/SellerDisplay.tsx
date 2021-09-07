import React from 'react'
import styled, { css } from 'styled-components'
import { fonts } from '../../globalStyles/fonts'
import { mediaQueries } from '../../mediaQueries/mediaQueries'
import groupSeller from './Sellers.png'

export const SellerDisplay: React.FC = () => {
  return (
    <Container>
      <Image src={groupSeller} alt='group of sellers' />
      <Article>
        <Title>
          <h3>Know your seller</h3>
          <Paragraph>
            Track exactly who made your products, how they were made and how
            they got to you. Because you can actually talk to the person, you
            have an individual connection to the origin of your purchase.
          </Paragraph>
        </Title>
      </Article>
    </Container>
  )
}

const fontProps = css`
  color: #041d42;
  font-style: normal;
  font-weight: normal;
`

const Title = styled.header`
  line-height: 60px;
  color: #041d42;
  font-size: 25px;
  line-height: 30px;

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
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;

  ${mediaQueries('xl', null)`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 26px
  `}
`

const Image = styled.img`
  width: 100%;
`

const Article = styled.article`
  margin-inline-start: 20px;
  margin-inline-end: 20px;
`

const Paragraph = styled.p`
  ${fonts}
  ${fontProps}
  font-family: Garamond;
  font-size: 20px;
  line-height: 22px;

  ${mediaQueries('xl', null)`
      font-size: 35px;
      line-height: 39px;
`}
`
