import { FC } from 'react'
import { Logo } from '../Logo/Logo'
import styled from 'styled-components'
import { List } from '../HeaderNavLink/List'
import logo from '../Logo/images/vamalaka.svg'
import searchIcon from '../../assets/searchIcon.svg'
import Input from '../HeaderInputSearch/HeaderInputSearch'
import {
  HeaderNavLink,
  ItemType,
  LinkTypes,
} from '../HeaderNavLink/HeaderNavLink'

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

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`
