import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Input, InputProps } from './InputName'

export default {
  title: 'Input/Input',
  component: Input,
} as Meta

const Template: Story<InputProps> = (args) => <Input {...args} />

export const inputWithError = Template.bind({})
inputWithError.args = {
  placeholder: 'Invictus Innocent',
  label: 'Your full name',
  value: 'name',
  errorMes: 'Invalid email. Please try again!',
  type: 'email or password',
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => {},
}

export const inputWithoutError = Template.bind({})
inputWithoutError.args = {
  placeholder: 'Invictus Innocent',
  label: 'Your full name',
  value: 'name',
  type: 'email or password',
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => {},
}
