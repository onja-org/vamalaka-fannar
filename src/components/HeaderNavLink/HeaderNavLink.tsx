import React, { FC, Fragment } from 'react'
import styled from 'styled-components'
import language from '../../assests/languages.svg'
import transactions from '../../assests/transactions.svg'
import account from '../../assests/account.svg'
import signin from '../../assests/signin.svg'
import { fontFace } from '../../globalStyles/fonts'

export const loggedIn = [
  { path: '#language', imgSrc: language, alt: 'Languages', text: 'English' },
  {
    path: '#transactions',
    imgSrc: transactions,
    alt: 'Transactionss',
    text: 'Transactions',
  },
  {
    path: '#account',
    imgSrc: account,
    alt: 'Accounts',
    text: 'Account',
  },
]

export const loggeOut = [
  { path: '#language', imgSrc: language, alt: 'Languages', text: 'English' },
  {
    path: '#login',
    imgSrc: signin,
    alt: 'Log in',
    text: 'Log in',
  },
  {
    path: '#account',
    imgSrc: account,
    alt: 'Accounts',
    text: 'Account',
  },
]
export interface ItemType {
  path: string
  imgSrc?: string
  alt: string
  text: string
}

export interface LinkTypes {
  item: Array<ItemType>
}

export const HeaderNavLink: FC<ItemType> = ({ path, text, imgSrc, alt }) => (
  <Item>
    <a type='button' href={path} data-testid={text}>
      <img src={imgSrc} alt={alt} />
      <span>{text}</span>
    </a>
  </Item>
)

const Item = styled.li`
  a {
    ${fontFace}
    font-size: 25px;
    line-height: 30px;
    color: #041d42;
    text-decoration: none;

    img {
      height: 22px;
    }

    span {
      margin-inline-start: 10px;
    }
  }
`
