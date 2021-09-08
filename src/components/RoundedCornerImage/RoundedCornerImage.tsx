import React from 'react'
import styled from 'styled-components'

export interface RoundImageProps {
  src: string
  alt: string
}

export const RoundedCornerImage: React.FC<RoundImageProps> = ({ alt, src }) => {
  return (
    <Container>
      <Image src={src} alt={alt} />
    </Container>
  )
}

const Container = styled.h1`
  text-align: start;
  img {
    width: 100%;
  }
`
const Image = styled.img`
  margin-inline-start: 0;
  border-radius: 30px;
  background: #c4c4c4;
  max-width: 226px;
`
