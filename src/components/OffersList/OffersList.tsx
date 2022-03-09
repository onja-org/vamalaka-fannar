import React from 'react'
import styled from 'styled-components'
import { Offer } from '../Offer/Offer'
import { SellerInfoProperties } from '../SellerPreviewInfo/SellerPreviewInfo'

export interface Photo {
  url: string
  info: string
  isPrimary: boolean
}

interface OfferData {
  id: string
  title: string
  body: string
  user: SellerInfoProperties
  photos: Photo[]
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
      {offers.map((offer) => {        
        return <Offer
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
          offerDescription={offer.body}
          user={offer.user}
          ratingDescription={''}
          star={0}
          unit={''}
          id={offer.id}
        />
      })}
    </OffersListContainer>
  )
}
