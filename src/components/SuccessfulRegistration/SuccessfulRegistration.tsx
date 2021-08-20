import React from 'react'
import styled from 'styled-components'
import { fonts } from '../../globalStyles/fonts'

export const SuccessFulRegistration = () => {
  return (
    <Wrapper>
      <Title>Registration successful!</Title>
      <Link href='http://login'>Go to the login page</Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  ${fonts}
`

const Title = styled.h1`
  font-size: 30px;
  line-height: 36px;
  display: flex;
  align-items: center;
  color: #041d42;
`

const Link = styled.a`
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-decoration-line: underline;
  color: #979797;
`
