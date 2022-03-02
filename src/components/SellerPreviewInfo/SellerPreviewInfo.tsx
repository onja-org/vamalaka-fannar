import React from 'react'
import styled from 'styled-components'
import { fonts } from '../../globalStyles/fonts'

export interface SellerInfoProperties {
  image: string
  name: {
    firstName: string
    lastName: string
  }
  location: {
    country: string
    city: string
  }
  username: string
}

export const SellerPreviewInfo: React.FC<SellerInfoProperties> = ({
  image,
  name,
  location,
  username,
}) => {
  return (
    <Container>
      <Image src={image} alt={`${username}'s profile picture`} />
      <Description>
        {name.firstName} {name.lastName} | {location.city} | {location.country}
      </Description>
    </Container>
  )
}

const Container = styled('div')`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
`
const Image = styled('img')`
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  border-radius: 20px;

  @media (min-width: 425px) {
    width: 31px;
    height: 31px;
  }
`
const Description = styled('span')`
  ${fonts}
  font-family: 'Futura Std', Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  color: #979797;

  @media (min-width: 425px) {
    font-size: 12px;
    line-height: 14px;
  }
`
