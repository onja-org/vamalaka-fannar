import React from 'react'
import { Story, Meta, addDecorator } from '@storybook/react'
import { Logo, LogoProps } from './Logo'
import logo from './images/vamalaka.svg'
import { MemoryRouter } from 'react-router'

addDecorator((story) => (
  <MemoryRouter initialEntries={['/']}>{story() as any}</MemoryRouter>
))

export default {
  title: 'Header/Logo',
  component: Logo,
} as Meta

const Template: Story<LogoProps> = (args) => <Logo {...args} />

export const LogoTemplate = Template.bind({})
LogoTemplate.args = {
  alt: 'logo',
  logo: logo,
}
