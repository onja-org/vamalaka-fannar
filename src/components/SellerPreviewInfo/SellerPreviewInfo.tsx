import React from 'react'
import styled from 'styled-components'
import { fonts } from '../../globalStyles/fonts'
import { BACKEND_URL } from '../../localHost';
import testAccount from '../../assets/testAccount.png'
import { Link } from 'react-router-dom';
import { Paths } from '../../paths';

interface UserPhoto {
  url: string
  isPrimary: boolean
}

export interface Location {
  country: string
  city: string
}
export interface SellerInfoProperties {
  username: string
  photos: UserPhoto[]
  location: Location
}

export const SellerPreviewInfo: React.FC<SellerInfoProperties> = ({
  photos,
  username,
  location,
}) => {

  const getPhotoUrl = photos?.map(el => el.url)
  const photoSrc = `${BACKEND_URL}/uploads/${getPhotoUrl?.[0]}`;
  const userPhoto = getPhotoUrl?.[0] === undefined ? `${testAccount}` : photoSrc;

  return (
    <Container>
      <Link to={`${Paths.PROFILE}/:${username}`}>
        <Image src={userPhoto} alt={`${username}'s profile picture`} />
        <Description>
          {username} | {location.city} | {location.country}
        </Description>
      </Link>
    </Container>
  )
}

const Container = styled('div')`
  a{
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
  }
  
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
