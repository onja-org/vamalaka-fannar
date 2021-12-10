import { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import language from '../../assets/languages.svg'
import transactions from '../../assets/transactions.svg'
import account from '../../assets/account.svg'
import signin from '../../assets/signin.svg'
import { fonts } from '../../globalStyles/fonts'
import { mediaQueries } from '../../mediaQueries/mediaQueries'
import { Paths } from '../../paths'
import UserWidget from '../UserWidget/UserWidget'

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
    text: 'Account',
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
  return( text === "Account" ?
  <Profile>
    <Item>
      <Link to={Paths.PROFILE} data-testid={'Account'}>
        <img src={imgSrc} alt={alt} />
        <span>{text}</span>
        </Link> 
        <UserWidget offers={[]} username={''} id={''}/>
      </Item>
     </Profile>
    :
    <Item>
      <Link to={`/${path}`} data-testid={text}>
        <img src={imgSrc} alt={alt} />
        <span>{text}</span>
      </Link>
    </Item>
  )}

const Item = styled.li`
	display: block;
	float: left;
	padding: 1rem;
	position: relative;
	text-decoration: none;
  transition-duration: 0.5s;
  li:hover > ul {
    visibility: visible;
    opacity: 1;
    display: block;
  }
  img {
    width: 100%;
  }
  a {
    ${fonts}
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
      width: 100px;
       `}
    }
    span {
      margin-inline-start: 10px;

      ${mediaQueries(null, 'xl')`
        display: none;
      `}
    }
  }
`
const Profile = styled.div`
  h4 {
    font-size: 18px;
  }
  li {
      background: darkorange;
      display: block;
      float: left;
      padding: 1rem;
      position: relative;
      text-decoration: none;
      transition-duration: 0.5s;
  }
  li:hover {
	background: red;
	cursor: pointer;
  }
  li:hover > ul {
    visibility: visible;
    opacity: 1;
    display: block;
  }
  ul:hover {
    visibility: visible;
    opacity: 1;
    display: block;
    
  }

`

const ProfileLink = styled.ul`
  padding: 0;
  list-style: none;
  display: inline;
  margin: 0;
  padding: 0;
  background: orange;
	visibility: hidden;
  opacity: 0;
  min-width: 5rem;
   position: absolute;
  transition: all 0.5s ease;
  margin-top: 1rem;
	left: 0;
  display: none;

  li {
    clear: both;
    width: 100%;
  }
  li:hover {background: #555}
  a {
    text-decoration: underline;
    color: #979797;
    display:block
  }
  }
`



const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

