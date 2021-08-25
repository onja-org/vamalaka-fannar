import React from 'react'
import styled from 'styled-components'
import { mediaQueries } from '../../mediaQueries/mediaQueries'

export interface ImageProps {
  src: string
  alt: string
}

export const ImageWithinOffer: React.FC<ImageProps> = ({ src, alt }) => {
  return <Image src={src} alt={alt} />
}

const Image = styled.img`
  width: 100%;
  ${mediaQueries('md', null)`
    max-width: 322px;
 `}
  ${mediaQueries('lmd', null)`
    max-width: 322px;
  `}
  ${mediaQueries('lg', null)`
      max-width: 322px;
  `}
`
