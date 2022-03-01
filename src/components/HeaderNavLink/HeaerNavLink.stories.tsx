import { Story, Meta, addDecorator } from '@storybook/react'
import {
  HeaderNavLink,
  ItemType,
  LinkTypes,
  loggedIn,
  login,
} from './HeaderNavLink'
import { ListItem } from './List'
import { MemoryRouter } from 'react-router'

addDecorator((story) => (
  <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
))

export default {
  title: 'Header/NavLink',
  component: HeaderNavLink,
} as Meta

const Template: Story<LinkTypes> = ({ item }) => (
  <ListItem>
    {item.map((link: ItemType) => (
      <HeaderNavLink {...link} key={link.path} />
    ))}
  </ListItem>
)

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  item: loggedIn,
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {
  item: login,
}
