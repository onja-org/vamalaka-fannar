import React from 'react'
import { Story, Meta, addDecorator } from '@storybook/react'
import { Login, LoginProps } from './Login'
import { MemoryRouter } from 'react-router'

addDecorator((story) => (
  <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
))

export default {
  title: 'Login/Login',
  component: Login,
} as Meta

const LoginStoryBook: Story<LoginProps> = (args) => <Login {...args} />

export const AlreadyHaveAnAccount = LoginStoryBook.bind({})
AlreadyHaveAnAccount.args = {
  isSignedUp: true,
}

export const NotUser = LoginStoryBook.bind({})
NotUser.args = {
  isSignedUp: false,
}
