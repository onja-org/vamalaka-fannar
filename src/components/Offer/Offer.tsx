import React, { useRef } from 'react'
import styled, { css } from 'styled-components'
import Buttons from '../Buttons/Buttons'
import { DescriptionOffer } from '../DescriptionOffer/descriptionOffer'
import { HeaderOfOffer } from '../HeaderOfOffer/HeaderOfOffer'
import { ImageWithinOffer } from '../ImageWithinOffer/ImageWithinOffer'
import { PriceOfOffer } from '../PriceOfOffer/PriceOfOffer'
import { Rating } from '../rating/Rating'
import { SellerPreviewInfo } from '../SellerPreviewInfo/SellerPreviewInfo'

const flexLayout = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const OfferStyle = styled.div`
  background-color: #ffffff;
  max-width: 225px;
  .buttonContainer {
    ${flexLayout}
    justify-content: space-between;

    button {
      padding: 8px 18px;
      font-size: 16px;
    }

    .favoriteButton {
      display: block;
      background-color: transparent;
      border: none;

      &:focus {
        outline: none;
      }
      @media (min-width: 1114px) {
        display: none;
      }
    }
    .favoriteButtonContainer {
      display: none;
      @media (min-width: 1114px) {
        display: block;
      }

      button {
        padding: 6px 10px;
      }
    }

    @media (min-width: 1114px) {
      padding-bottom: 5px;
      max-width: 90%;
    }
  }

  .offerDetails {
    margin-left: 9px;
    h3 {
      margin-left: -9px;
      padding-left: 9px;
      transform: translateY(-26px);
      background-color: #fff;
      width: fit-content;

      @media (min-width: 1114px) {
        transform: translateY(14px);
        font-size: 30px;
      }
    }
  }

  .productDetails {
    ${flexLayout}
    gap: 11.5px;

    @media (min-width: 1114px) {
      gap: 15.75px;
    }
  }

  .ratingContainer {
    ${flexLayout}
    gap: 4.19px;

    @media (min-width: 1114px) {
      gap: 7.5px;
    }
  }

  @media (min-width: 1114px) {
    ${flexLayout}
    justify-content: space-between;
    max-width: 422px;
    padding-left: 3px;
    padding-right: 11px;
    box-shadow: 0px 4px 50px -8px rgba(21, 140, 177, 0.3);
  }
`

export interface OfferProps {
  imageForOffer: string
  imageDescription: string
  offerName: string
  currency: string
  amount: number
  unit: string
  star: number
  ratingDescription: string
  imageForRating: string
  amountOfProduct: number
  offerDescription: string
  isLearnEnabled: boolean
  detailButtonText: string
  favoriteButtonText?: string
  isFavourited?: boolean
  profile: string
  name: {
    firstName: string
    lastName: string
  }
  location: {
    country: string
    city: string
  }
}

// window.innerWidth + "px"=> get the width of the device

export const Offer: React.FC<OfferProps> = ({
  imageForOffer,
  imageDescription,
  offerName,
  currency,
  amount,
  unit,
  star,
  ratingDescription,
  amountOfProduct,
  offerDescription,
  isLearnEnabled,
  detailButtonText,
  favoriteButtonText,
  isFavourited,
  profile,
  name,
  location,
}) => {
  const outlineHeart = isFavourited ? (
    'hello'
  ) : (
    <svg
      width='29'
      height='25'
      viewBox='0 0 29 25'
      fill='red'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M15.171 24.6478L26.3225 13.391C27.7692 11.9144 28.5769 9.92795 28.5712 7.86079C28.5656 5.79363 27.7469 3.81168 26.2921 2.34306C25.5785 1.61509 24.7272 1.0363 23.7878 0.640364C22.8484 0.244425 21.8396 0.0392409 20.8202 0.0367484C19.8008 0.0342559 18.791 0.234505 17.8497 0.625846C16.9084 1.01719 16.0543 1.59181 15.3371 2.31628L14.2728 3.39303L13.1925 2.30378C12.4798 1.57677 11.6297 0.998714 10.6916 0.603219C9.75353 0.207723 8.74617 0.00268473 7.72811 2.61891e-05C6.71005 -0.00263235 5.70163 0.197142 4.76148 0.587732C3.82133 0.978323 2.96821 1.55193 2.25175 2.27521C-0.76245 5.31976 -0.748165 10.2678 2.28032 13.3267L13.4889 24.6478C13.9532 25.1174 14.7068 25.1174 15.171 24.6478ZM16.6067 3.5716C17.158 3.01515 17.8144 2.57396 18.5379 2.27375C19.2614 1.97353 20.0373 1.82029 20.8206 1.82295C21.6039 1.82561 22.3788 1.98412 23.1002 2.28924C23.8216 2.59436 24.4751 3.03999 25.0225 3.60017C26.1461 4.73468 26.7788 6.26533 26.7841 7.86205C26.7895 9.45878 26.1671 10.9936 25.0511 12.1356V12.1392L14.33 22.9603L3.54814 12.0696C1.20357 9.70178 1.20178 5.87332 3.52136 3.53053C4.07191 2.97511 4.72746 2.53475 5.44983 2.23511C6.1722 1.93547 6.94696 1.78253 7.72901 1.78519C8.51105 1.78785 9.28476 1.94606 10.0051 2.2506C10.7254 2.55515 11.3779 2.99994 11.9247 3.5591L13.6389 5.29119C13.722 5.37514 13.8208 5.44179 13.9298 5.48728C14.0387 5.53277 14.1557 5.55619 14.2737 5.55619C14.3918 5.55619 14.5087 5.53277 14.6177 5.48728C14.7266 5.44179 14.8255 5.37514 14.9085 5.29119L16.6067 3.5716Z'
        fill='#041D42'
      />
    </svg>
  )

  return (
    <OfferStyle>
      <ImageWithinOffer src={imageForOffer} alt={imageDescription} />
      <div className='offerDetails'>
        <HeaderOfOffer name={offerName} />

        <div className='productDetails'>
          <PriceOfOffer currency={currency} value={amount} unit={unit} />
          <div className='ratingContainer'>
            <Rating star={star} alt={ratingDescription} />
            <span>({amountOfProduct})</span>
          </div>
        </div>
        <SellerPreviewInfo image={profile} name={name} location={location} />
        <DescriptionOffer text={offerDescription} />
        <div className='buttonContainer'>
          <Buttons learnEnabled={isLearnEnabled} label={detailButtonText} />
          <button className='favoriteButton'>{outlineHeart}</button>
          <div className='favoriteButtonContainer'>
            <Buttons label={favoriteButtonText} />
          </div>
        </div>
      </div>
    </OfferStyle>
  )
}
