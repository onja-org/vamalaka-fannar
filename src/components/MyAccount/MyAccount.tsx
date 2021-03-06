import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from '../Buttons/Buttons'
import edit from './icons/edit.svg'
import deleteIcon from './icons/delete.svg'
import { Offer } from '../Offer/Offer'
import { Paths } from '../../paths'
import addSVG from "./icons/plus-circle.svg"
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
  username: SellerInfoProperties
  photos: Photo[]
}

export interface OffersListProps {
  offers: OfferData[]
  username: string
  id: string
}

const MyAccount: React.FC<OffersListProps> = ({ offers, username, id }) => {
  return (
    <Container>
      <Wrapper>
        <div>
      <h3>My account</h3>
      <Profile>
        <h5>Profile:</h5>
        <ProfileLink>
          <li>
            <Link to={`${Paths.PROFILE}/:${username}`}>Preview</Link>
          </li>
          <li>
            <Link to={`${Paths.PROFILE}/:${id}`}>Edit</Link>
          </li>
        </ProfileLink>
      </Profile>
      </div>
      </Wrapper>
      <OfferWrapper>
        <Wrapper>
        <h4>Offers:</h4>
        <Link to={`${Paths.CREATE_NEW_OFFER}`}>
        <Button icon={addSVG} type="button" onClick={() => {}} label="Create new" />
        </Link>
        </Wrapper>
        <OfferList>
          {offers.map((offer) => (
            <li key={offer.id}>
              <Offer
                id={offer.id}
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
                user={offer.username}
                offerDescription={offer.body}
                ratingDescription={''}
                star={0}
                unit={''}
              />
              <ImageButton>
              <Link
               to={`/edit-offer/${offer.id}`}>
                <Button 
                label='EDIT' 
                type='button' 
                icon={edit}
                onClick={() => {}} />
                </Link>
                <Button label='DELETE' type='button' icon={deleteIcon} />
              </ImageButton>
            </li>
          ))}
        </OfferList>
      </OfferWrapper>
    </Container>
  )
}

export default MyAccount

const Container = styled.article`
  max-width: 1008px;
  margin: auto;
  padding: 74px 16px;

  h3 {
    font-size: 30px;
  }
`

const Profile = styled.div`
  h4 {
    font-size: 18px;
  }
`

const ProfileLink = styled.ul`
  padding: 0;
  list-style: none;

  a {
    text-decoration: underline;
    color: #979797;
  }
`

const OfferWrapper = styled.section`
  padding: 0;

  h4 {
    font-size: 24px;
  }
`

const OfferList = styled.ul`
  padding: 0;
  list-style: none;

  li {
    position: relative;
  }
`

const ImageButton = styled.div`
  position: absolute;
  top: 34px;
  left: 34px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`