import React from 'react'
import { Story, Meta, addDecorator } from '@storybook/react'
import {
  HeaderNavLink,
  ItemType,
  LinkTypes,
  loggedIn,
  login,
} from './HeaderNavLink'
import { List } from './List'
import { MemoryRouter } from 'react-router'

addDecorator((story) => (
  <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
))

export default {
  title: 'Header/NavLink',
  component: HeaderNavLink,
} as Meta

const Template: Story<LinkTypes> = ({ item }) => (
  <List>
    {item.map((link: ItemType) => (
      <HeaderNavLink {...link} key={link.path} />
    ))}
  </List>
)

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  item: loggedIn,
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {
  item: login,
}
