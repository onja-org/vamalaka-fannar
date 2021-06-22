import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Login, LoginProps } from './Login'

export default {
  title: 'Login/Login',
  component: Login,
} as Meta

const LoginStoryBook: Story<LoginProps> = (args) => <Login {...args} />

export const AlreadyHaveAnAccount = LoginStoryBook.bind({})
AlreadyHaveAnAccount.args = {
  isSignedUp: true,
  href: './',
}

export const NotUser = LoginStoryBook.bind({})
NotUser.args = {
  isSignedUp: false,
  href: './',
}
