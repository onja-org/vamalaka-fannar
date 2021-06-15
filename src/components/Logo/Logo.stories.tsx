import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Logo, LogoProps } from './Logo'
import logo from './images/vamalaka.svg'

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
