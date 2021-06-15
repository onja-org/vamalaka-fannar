import React from 'react'
import styled from 'styled-components'

export interface LogoProps {
  logo: string
  alt: string
}

export const Logo: React.FC<LogoProps> = ({ alt, logo }) => {
  return (
    <Container>
      <a href='/'>
        <Image src={logo} alt={alt} />
      </a>
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
    width: 346px;
  }
`
