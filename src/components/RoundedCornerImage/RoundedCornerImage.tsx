import React from 'react'
import styled from 'styled-components'
import emptyImage from '../../images/empty-image.svg'

export interface RoundImageProps {
  imageSource?: string | undefined
  alt: string
  onClick: () => void
}

export const RoundedCornerImage: React.FC<RoundImageProps> = ({
  alt,
  imageSource,
  onClick,
}) => {
  
  return (
    <Container>
      <Image onClick={onClick} src={imageSource} alt={alt} />
    </Container>
  )
}

const Container = styled.h1`
  text-align: start;
  img {
    width: 75px;
  }
`
const Image = styled.img`
  margin-inline-start: 0;
  border-radius: 10px;
  // background: #c4c4c4;
`
