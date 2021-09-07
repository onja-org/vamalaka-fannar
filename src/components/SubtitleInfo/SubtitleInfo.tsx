import React from 'react'
import styled, { css } from 'styled-components'
import { fonts } from '../../globalStyles/fonts'
import { mediaQueries } from '../../mediaQueries/mediaQueries'
import Button from '../Buttons/Buttons'

export const SubtitleInfo = () => {
  return (
    <Container>
      <Subtitle>This is a subtitle that is very informative</Subtitle>
      <Title>
        Discover amazing products and profit from a truly fair market:{' '}
      </Title>
      <Wrapper>
        <Button
          label='Discover Products'
          type='button'
          isPrimary={true}
          onClick={() => {}}
        />
        <Button
          label='Become a member'
          type='button'
          isPrimary={false}
          onClick={() => {}}
        />
      </Wrapper>
    </Container>
  )
}

const fontProps = css`
  color: #041d42;
  font-style: normal;
  font-weight: normal;
`

const Container = styled.aside`
  background-color: #ffffff;
  text-align: center;
  padding-block-start: 60px;
  margin-inline-end: 20px;
  margin-inline-start: 20px;
  position: relative;
  bottom: -200px;

  & > * {
    max-width: 851px;
    margin: auto;
    padding: 20px;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${mediaQueries('lg', null)`
    flex-direction: row;
    justify-content: center;


  button {
    margin-right: 20px;
  }
  `};

  button {
    margin-bottom: 20px;
  }
`

const Title = styled.h3`
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

const Subtitle = styled.span`
  ${fonts}
  ${fontProps}
  font-family: Garamond;
  font-size: 20px;
  line-height: 22px;
  color: #979797;
  ${mediaQueries('l', null)`
    margin-top: 0;
    font-size: 30px;
    line-height: 39px;
`};
`
