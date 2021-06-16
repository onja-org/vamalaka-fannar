import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Back, BackProps } from './Back'

export default {
  title: 'Components/Back',
  component: Back,
} as Meta

const Template: Story<BackProps> = (args) => <Back {...args} />

export const Short = Template.bind({})
Short.args = {
  label: 'Back',
  href: '/',
}

export const Long = Template.bind({})
Long.args = {
  label: 'Back to Homepage',
  href: '/',
}
