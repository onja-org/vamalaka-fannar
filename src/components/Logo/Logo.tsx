import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Paths } from '../../paths'

export interface LogoProps {
  logo: string
  alt: string
}

export const Logo: React.FC<LogoProps> = ({ alt, logo }) => {
  return (
    <Container>
      <Link to={Paths.DEFAULT}>
        <Image src={logo} alt={alt} />
      </Link>
    </Container>
  )
}

const Container = styled.h1`
  text-align: start;
`
const Image = styled.img`
  max-width: 100%;
  margin-inline-start: 0;

  @media (min-width: 362px) {
    width: 242px;
  }

  @media (min-width: 834px) {
    width: 270px;
    height: 35px;
  }
`
