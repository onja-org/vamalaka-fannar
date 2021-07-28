import { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import language from '../../assets/languages.svg'
import transactions from '../../assets/transactions.svg'
import account from '../../assets/account.svg'
import signin from '../../assets/signin.svg'
import { fonts } from '../../globalStyles/fonts'
import { mediaQueries } from '../../mediaQueries/mediaQueries'

export const loggedIn = [
  { path: '#language', imgSrc: language, alt: 'Languages', text: 'English' },
  {
    path: '#transactions',
    imgSrc: transactions,
    alt: 'Transactions',
    text: 'Transactions',
  },
  {
    path: '#account',
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
    path: 'register-account',
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

export const HeaderNavLink: FC<ItemType> = ({ path, text, imgSrc, alt }) => (
  <Item>
    <Link to={`/${path}`} data-testid={text}>
      <img src={imgSrc} alt={alt} />
      <span>{text}</span>
    </Link>
  </Item>
)

const Item = styled.li`
  a {
    ${fonts}
    font-family: 'Futura Std', Arial, Helvetica, sans-serif;
    font-size: 25px;
    line-height: 30px;
    color: #041d42;
    text-decoration: none;
    display: flex;
    border: none;
    background-color: transparent;

    span {
      margin-inline-start: 10px;

      ${mediaQueries('md', 'lg')`
        display: none;
      `}
    }
  }
`
