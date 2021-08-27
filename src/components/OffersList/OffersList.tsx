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
}
export interface OffersListProps {
  offers: OfferData[]
}
const OffersListContainer = styled.ul`
  display: block;
  max-width: 90%;
  min-width: 90%;
  margin: auto;
  padding-inline-start: 0;
  margin-block-end: 0;
  padding-block-end: 4rem;
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
          imageDescription={offer.photos?.[0].info}
          photos={offer?.photos}
          imageForRating={''}
          isLearnEnabled={true}
          isFavourited={false}
          favoriteButtonText='Add to favourite'
          name={offer.username}
          offerDescription={offer.body}
          profile={''}
          ratingDescription={''}
          star={0}
          unit={''}
        />
      ))}
    </OffersListContainer>
  )
}
