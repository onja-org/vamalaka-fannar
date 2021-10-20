
import { addDecorator, Meta, Story } from '@storybook/react'
import { Header } from '.'
import { LinkTypes, loggedIn } from '../HeaderNavLink/HeaderNavLink'
import { MemoryRouter } from 'react-router'

export default {
  title: 'Header',
  component: Header,
} as Meta

addDecorator((story) => (
  <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
))

const Template: Story<LinkTypes> = (args) => <Header {...args} />

export const HeaderContainer = Template.bind({})
HeaderContainer.args = {
  item: loggedIn,
}
