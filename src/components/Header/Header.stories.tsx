import React, { FC } from 'react'
import { Meta, Story } from '@storybook/react'
import { Header } from '.'
import { LinkTypes, loggedIn } from '../HeaderNavLink/HeaderNavLink'

export default {
  title: 'Header',
  component: Header,
} as Meta

const Template: Story<LinkTypes> = (args) => <Header {...args} />

export const HeaderContainer = Template.bind({})
HeaderContainer.args = {
  item: loggedIn,
}
