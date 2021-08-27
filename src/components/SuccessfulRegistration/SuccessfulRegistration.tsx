import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { fonts } from '../../globalStyles/fonts'
import { Paths } from '../../paths'

export const SuccessFulRegistration = () => {
  return (
    <Wrapper>
      <Link to={Paths.LOGIN}>
        <Text> Go to the login page</Text>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  ${fonts}
  font-size: 30px;
  display: flex;
  justify-content: flex-start;
`

const Text = styled.span`
  font-size: 16px;
  display: flex;
  text-decoration-line: underline;
  color: #979797;
  padding-inline-start: 15px;
  padding-block-start: 110px;
`
