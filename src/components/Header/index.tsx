import React, { FC } from 'react'
import { Logo } from '../Logo/Logo'
import styled from 'styled-components'
import logo from '../Logo/images/vamalaka.svg'
import searchIcon from '../../assests/searchIcon.svg'
import {
  HeaderNavLink,
  ItemType,
  LinkTypes,
} from '../HeaderNavLink/HeaderNavLink'
import { List } from '../HeaderNavLink/List'
import Input from '../HeaderInputSearch/HeaderInputSearch'

export const Header: FC<LinkTypes> = ({ item }) => {
  return (
    <HeaderStyles>
      <div>
        <Logo logo={logo} alt='Vamalaka logo' />
        <Input
          icon={searchIcon}
          alt='Input search'
          placeholderText='Search for anything...'
        />
        <List>
          {item.map((link: ItemType) => (
            <HeaderNavLink {...link} key={link.path} />
          ))}
        </List>
      </div>
    </HeaderStyles>
  )
}

const HeaderStyles = styled.header`
  margin: 0;
  width: 100%;
  background-color: #fff5f1;

  div {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    gap: 50px;

    @media (max-width: 900px) {
      display: flex;
      justify-content: space-between;
    }
  }
`
