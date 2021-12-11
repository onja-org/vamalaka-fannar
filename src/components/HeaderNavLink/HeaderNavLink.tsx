import { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import language from '../../assets/languages.svg'
import transactions from '../../assets/transactions.svg'
import account from '../../assets/account.svg'
import signin from '../../assets/signin.svg'
import { mediaQueries } from '../../mediaQueries/mediaQueries'
import Widget from '../Widget/Widget'
import profilePicture from '../../assets/profile-image.png'
import { adsSelector, fetchAds } from '../../redux/slices/adsSlice'
import { useAppDispatch } from '../../redux/hooks'
import { useSelector } from 'react-redux'

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
  const dispatch = useAppDispatch()
  const offers = useSelector(adsSelector)
  console.log(offers)

  useEffect(() => {
    dispatch(fetchAds([]))
  }, [dispatch])

  const dropDown = text === "My account" && 
    <Widget 
      src={profilePicture}
      alt= {alt}
      offersNumber= {3}
      logOutLabel= "Log out"
      offersLabel= "Offers"
      profileName= "Adolfina"
    />
  return (
    <Item>
      <Link to={`/${path}`} data-testid={text}>
        <IconImg src={imgSrc} alt={alt} />
        <Span>{text}</Span>
      </Link>
      {dropDown}
    </Item>
  )
}

const Item = styled.li`
  position: relative;
  display: inline-block;

  &:hover article {
    display: block;
  }
  
  &:hover h3:hover {
    background-color: #FFF5F1;
  }
  
  article {
    display: none;
    position: absolute;
    left: -152px;
    background-color: #FFF5F1;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    z-index: 1;
    text-align: center;
  }

  a {
    font-style: normal;
    font-weight: normal;
    font-family: 'Futura Std', Arial, Helvetica, sans-serif;
    font-size: 1.6rem;
    line-height: 30px;
    color: #041d42;
    text-decoration: none;
    display: flex;
    border: none;
    background-color: transparent;
    align-items: center;

    span:last-child {
      ${mediaQueries('xl', null)`
       width: 95px;
       `}
    }

  ${mediaQueries('xl', null)`
    position: relative;
    display: inline-block;
    width: 172px;
  
    &:hover h3:hover {
      background-color: #FFF5F1;
    }
  `}

  `
  const IconImg = styled.img ` 
  width: 100%;
  `;
  
  const Span = styled.span `
    ${mediaQueries(null, 'xl')`
    display: none;
    `} 
  `;
