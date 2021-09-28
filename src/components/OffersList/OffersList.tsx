import React from 'react'
import styled from 'styled-components'
import { Offer } from '../Offer/Offer'
interface User {
  firstName: string
  lastName: string
}
// export photo interface and use it in offer
export interface Photo {
  url: string
  info: string
  isPrimary: boolean
}
interface OfferData {
  id: string
  title: string
  body: string
  username: User
  photos: Photo[]
  user: any
}
export interface OffersListProps {
  offers: OfferData[]
}
const OffersListContainer = styled.ul`
  display: block;
  min-width: 90%;
  margin: auto;
  margin-block-end: 0;
  padding: 0;
  width: 100%;
`
export const OffersList: React.FC<OffersListProps> = ({ offers }) => {
  return (
    <OffersListContainer>
      {offers.map((offer) => (
        <Offer
          key={offer.id}
          offerName={offer.title}
          amount={25}
          amountOfProduct={27}
          location={{ city: 'Mahanoro', country: 'Madagascar' }}
          currency={''}
          detailButtonText='See details'
          imageDescription={offer.photos?.[0]?.info}
          photos={offer?.photos}
          imageForRating={''}
          isLearnEnabled={true}
          isFavourited={false}
          favoriteButtonText='Add to favourite'
          name={offer.username}
          offerDescription={offer.body}
          profile={offer.user.photos[0]?.url}
          ratingDescription={''}
          star={0}
          unit={''}
        />
      ))}
    </OffersListContainer>
  )
}
