import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../Buttons/Buttons';
import { ImageWithinOffer } from '../ImageWithinOffer/ImageWithinOffer';
import { HeaderOfOffer } from '../HeaderOfOffer/HeaderOfOffer';
import { PriceOfOffer } from '../PriceOfOffer/PriceOfOffer';
import { Rating } from '../rating/Rating';
import { SellerPreviewInfo } from '../SellerPreviewInfo/SellerPreviewInfo';
import { DescriptionOffer } from '../DescriptionOffer/descriptionOffer';
import styled from 'styled-components';
import edit from './icons/edit.svg';
import xCircle from './icons/x-circle.svg'
import plusCircle from './icons/plus-circle.svg'

export  interface OfferDetailsProps {
  offerName: string
  imageSrc: string
  imageDescription: string
  offerId: string
  offerDescription: string
  currency:string
  amount: number
  unit: string
  stars: number
  ratingDescription: string
  amountOfProduct: any
  profile: string
  name: {
    firstName: string
    lastName: string
  }
  location: {
    country: string
    city: string
  }
  username: string
  editOnClick?: () => void
  deleteOnClick?: () => void
}

const OfferDetail:React.FC<OfferDetailsProps> = ({ 
  offerName,
  imageSrc,
  imageDescription,
  offerId,
  currency,
  amount,
  unit,
  stars,
  ratingDescription,
  amountOfProduct,
  name,
  profile,
  offerDescription,
  location,
  username,
  editOnClick,
  deleteOnClick,
}) => {

  return (
    <OfferDetailsContainer>
      <AccountStyle data-cy="account">
        <h2>My account</h2>
        <h4>Profile:</h4>
        <div>
            <Link to="/preview">Preview</Link>
            <Link to="/edit">Edit</Link>
        </div>
        <CreateNewButton>
          <Button
            type='button'
            isPrimary={false}
            label='Create new'
            icon={plusCircle}
          />
        </CreateNewButton>
        <h3>Offers:</h3>
      </AccountStyle>
      <ul data-cy="offer_list">
        <Offer>
          <ImageStyle>
            <ImageWithinOffer src={imageSrc} alt={imageDescription} />
            <div>
              <Button
                id={offerId}
                type='button'
                isPrimary={false}
                label="Edit"
                icon={edit}
              />
              <Button
                id={offerId}
                type='button'
                isPrimary={false}
                label="Delete"
                icon={xCircle}
              />
            </div>
          </ImageStyle>
          <AboutOffer>
            <HeaderOfOffer name={offerName} />
            <RateContainer>
              <PriceOfOffer currency={currency} value={amount} unit={unit} />
              <div>
                <Rating star={stars} alt={ratingDescription} />
                <span>({amountOfProduct})</span>
              </div>
            </RateContainer>
            <SellerPreviewInfo image={profile} username={username} name={name} location={location} />
            <DescriptionOffer text={offerDescription} />
            <MoreButton>
              <Button
                id={offerId}
                type='button'
                isPrimary={true}
                label={"See Details"}
              />
              <Button
                id={offerId}
                type='button'
                isPrimary={false}
                label={"Add to favorites"}
              />
            </MoreButton>
          </AboutOffer>
        </Offer>
      </ul>
      </OfferDetailsContainer>
  )
}

export default OfferDetail

const OfferDetailsContainer = styled.div`
    width: 100%;
    max-width: 1125px;
    margin: auto;
    background-color: #fff;
    padding: 114px 0;

    ul {
        list-style-type: none;
        padding: 0 84px 0 75px;

        @media (max-width: 380px) {
          padding: 0 16px;
        }
    }

    @media (max-width: 380px) {
      padding: 16px 0;
    }
`

const AccountStyle = styled.div`
    padding: 0 84px 0 75px;
    position: relative;

    h2 { font-size: 30px; line-height: 36px; }
    h3 { font-size: 24px; line-height: 28.8px; }
    h4 { font-size: 18px; line-height: 21.6px; }
    
    div {
        display: flex;
        flex-direction: column;

        a {font-size: 18px; line-height: 21.6px; text-decoration: underline;}
    }

    @media (max-width: 380px) {
      padding: 0 16px;
    }

`

const CreateNewButton = styled.div`
  margin-top: 36px;
  button {width: 170px; }

  @media (min-width: 768px) {
    position: absolute;
    top: 72px;
    left: 76%;
  }
`

const Offer = styled.li`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: 30% 1fr;
  }
`
const ImageStyle = styled.div`
  position: relative;
  
  img {
    width: 100%;
    height: 225px;
  }

  div {
    display: flex;
    gap: 20px;
    position: absolute;
    top: 20px;
    left: 20px;
    flex-wrap: wrap;

    button img {
      width: 18px;
      height: 18px;
    }
  }
`
const AboutOffer = styled.div`
  h3 {font-size: 30px; line-height: 33.75px}
`
const RateContainer = styled.div`
  display: flex;
  gap: 20px;

  p { margin: 0;}
  div {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`
const MoreButton = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 36px;
`