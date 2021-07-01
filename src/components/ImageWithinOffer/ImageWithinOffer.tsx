import React from 'react'
import styled from 'styled-components'

export interface ImageProps {
  src: string
  alt: string
}

export const ImageWithinOffer: React.FC<ImageProps> = ({ src, alt }) => {
  return <Image src={src} alt={alt} />
}

const Image = styled.img`
  @media (min-width: 1114px) {
    width: 138px;
    height: 219px;
    object-fit: cover;
  }
`
