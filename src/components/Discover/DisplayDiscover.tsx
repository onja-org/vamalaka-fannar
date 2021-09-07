import React from 'react'
import styled, { css } from 'styled-components'
import { fonts } from '../../globalStyles/fonts'
import { mediaQueries } from '../../mediaQueries/mediaQueries'
import Button from '../Buttons/Buttons'
import groupDiscover from './images/discover.png'
import MadagascarSVG from './images/madagascar.svg'

export type ContentProps = {
  lists?: string | undefined
}

export const DisplayDiscover: React.FC<ContentProps> = () => {
  return (
    <Container>
      <Image src={groupDiscover} alt='group of' />
      <Article>
        <Title>
          <h3>Discover Madagascar Products</h3>
          <Paragraph>
            Purchase high-quality products made by the people that sell them. By
            cutting out middlemen, you know exactly where your purchase is from
            and how it was made.
          </Paragraph>
        </Title>
        <Button
          type='button'
          label='See offer'
          disabled={false}
          isPrimary={true}
          onClick={() => {}}
        />
      </Article>
      <MadagascarSvgStyle src={MadagascarSVG} alt='madagacar image svg' />
    </Container>
  )
}

const fontProps = css`
  color: #041d42;
  font-style: normal;
  font-weight: normal;
`

const Title = styled.header`
  color: #041d42;
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
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;

  img {
    width: 100%;
  }

  ${mediaQueries('xl', null)`
    display: flex;
    flex-direction: row;
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

const MadagascarSvgStyle = styled.img`
  display: none;
  ${mediaQueries('lg', null)`
  display: block;
  position: absolute;
  z-index: 0;
  max-width: 469.64px;
  left: 306px;
  top: -150px;
`}
`
