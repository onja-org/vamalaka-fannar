import { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import language from '../../assets/languages.svg'
import transactions from '../../assets/transactions.svg'
import account from '../../assets/account.svg'
import signin from '../../assets/signin.svg'
import { fonts } from '../../globalStyles/fonts'
import { mediaQueries } from '../../mediaQueries/mediaQueries'
import { adsSelector } from '../../redux/slices/adsSlice'
import { userSelector } from '../../redux/slices/userSlice'
import { openMyProfile, showProfile, closeProfile } from '../../redux/slices/showProfileSlice'
import { useSelector, useDispatch } from 'react-redux'


export const loggedIn = [
  { path: '#language', imgSrc: language, alt: 'Languages', text: 'English' },
  {
    path: '#transactions',
    imgSrc: transactions,
    alt: 'Transactions',
    text: 'Transactions',
  },
  {
    path: 'profile',
    imgSrc: account,
    alt: 'Accounts',
    text: 'My account',
  },
]
export const login = [
  { path: 'language', imgSrc: language, alt: 'Languages', text: 'English' },
  {
    path: 'login',
    imgSrc: signin,
    alt: 'Log in',
    text: 'Log in',
  },
  {
    path: 'sign-up',
    imgSrc: account,
    alt: 'Sign up',
    text: 'Sign up',
  },
]
export interface ItemType {
  path?: string
  imgSrc?: string
  alt: string
  text: string
}
export interface LinkTypes {
  item: Array<ItemType>
}

export const HeaderNavLink: FC<ItemType> = ({ path, text, imgSrc, alt }) => {
  const offers = useSelector(adsSelector)
  const user = useSelector(userSelector)
  const dispatch = useDispatch();
  const isProfileOpen = useSelector(openMyProfile)

  const MyaccountNavigation = () => (<MyAccount><img src={imgSrc} alt={alt} /><span>{text}</span></MyAccount>)
  const userOffers = offers && offers.filter((offer) => offer.username === user.username)
  const Profile = () => (
    <ProfilePopup>
      <li onClick={() => dispatch(showProfile())}>
        <Link to={`/${path}`} data-testid={text}>
          <ImageProfile src={imgSrc} alt={offers && offers[0]?.photos[0].info} />
        </Link>
      </li>
      <li onClick={() => dispatch(showProfile())}>
        <Link to={`/${path}`} data-testid={text}>
          {user.username}
        </Link>
      </li>
      <li onClick={() => dispatch(showProfile())}>
        <Link to='my-offer' data-testid={text}>
          Offers <span>{userOffers && userOffers.length}</span>
        </Link>
      </li>
      <li onClick={() => dispatch(showProfile())}>
        <Link to="/">
          Log out
        </Link>
      </li>
    </ProfilePopup>) 

  return (
    <Container>
      <Item onClick={() => (text === "My account" ? dispatch(showProfile()) : dispatch(closeProfile()))}>
        {text === "My account" ? <MyaccountNavigation /> :
          <Link to={`/${path}`} data-testid={text}>
            <img src={imgSrc} alt={alt} />
            <span>{text}</span>
          </Link>
        }
      </Item>
      {(isProfileOpen?.isProfileOpen === true && text === "My account") ? <Profile /> : ""}
    </Container>
  )
} 

const Container = styled.div`
  margin: 0;
`
const ImageProfile = styled.img`
  border: 2px solid #000000;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.25);
`
const Item = styled.button`  
  background: none;
  border: none;
  img {
    width: 100%;
  }
  a {
    ${fonts}

    font-family: 'Futura Std',Arial,Helvetica,sans-serif;
    font-size: 22px;
    line-height: 30px;
    color: #041d42;
    text-decoration: none;
    border: none;
    background-color: transparent;

    span:last-child {
      ${mediaQueries('xl', null)`
       width: 74px;
       `}
    }
    span {
      margin-inline-start: 10px;

      ${mediaQueries(null, 'rmd')`
        display: none;
      `}
    }
  }
`
const MyAccount = styled.span`
  ${fonts}
  font-family: 'Futura Std',Arial,Helvetica,sans-serif;
  font-size: 25px;
  line-height: 30px;
  color: #041d42;
  text-decoration: none;
  border: none;
  background-color: transparent;

  span:last-child {
    ${mediaQueries('xl', null)`
    width: 74px;
    `}
  }
  span {
    margin-inline-start: 10px;

    ${mediaQueries(null, 'rmd')`
      display: none;
    `}
  }
`
const ProfilePopup = styled.ul`
  position: absolute;
  top: 100px;
  right: 0;
  max-width: 150px;
  background: linear-gradient(180deg, #fff5f1 0%, #feeae3 45.27%, #ffdbcc 94.31% );
  padding: 20px 40px;
  z-index: 1;
  li {
    font-family: Futura Std;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 30px;
    text-align: center;
    color: #041D42;
    list-style: none;
    margin: 20px 0;
  }
  li:nth-child(2) {
    color: #0E54BB;
  }
  li:nth-child(3) span {
    font-size: 14px;
    line-height: 17px;
    border-radius: 2px;
    background: yellow;
    padding: 4px;
  }
`