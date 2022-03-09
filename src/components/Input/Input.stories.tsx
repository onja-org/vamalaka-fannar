import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Input, InputProps } from './Input'

export default {
  title: 'Input/Input Name',
  component: Input,
} as Meta

const Template: Story<InputProps> = (args) => <Input {...args} />

export const textInput = Template.bind({})
textInput.args = {
  placeholder: 'Invictus Innocent',
  label: 'Your full name',
  inputType: 'text',
  inputId: 'inputName',
  inputValue: 'string',
  onChange: () => null,
}

export const passwordInput = Template.bind({})
passwordInput.args = {
  placeholder: 'Invictus Innocent',
  label: 'Your full name',
  inputType: 'password',
  inputId: 'inputName',
  inputValue: 'string',
  onChange: () => null,
}

export const emailInput = Template.bind({})
emailInput.args = {
  placeholder: 'Invictus Innocent',
  label: 'Your full name',
  inputType: 'email',
  inputId: 'inputName',
  inputValue: 'sm@th.ing',
  onChange: () => null,
}
