import React from 'react'
import styled from 'styled-components'
import { UPLOAD_PHOTO_URL } from '../../constants'
import { fonts } from '../../globalStyles/fonts'
import { User } from '../OffersList/OffersList'
export interface SellerInfoProperties {
  user: User
  location: {
    country: string
    city: string
  }
}

export const SellerPreviewInfo: React.FC<SellerInfoProperties> = ({
  user,
  location,
}) => {
  const imageSrc = `${UPLOAD_PHOTO_URL}/${user?.photos?.[0]?.url}?width=322&height=225&message=${user}`
  return (
    <Container>
      <Image src={imageSrc} alt={`${user.username}'s profile picture`} />
      <Description>
        {user.username} | {location.city} | {location.country}
      </Description>
    </Container>
  )
}

const Container = styled('div')`
  display: flex;
  flext-direction: row;
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
