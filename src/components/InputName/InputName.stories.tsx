import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Input, InputProps } from './InputName'

export default {
  title: 'Input/Input Name',
  component: Input,
} as Meta

const Template: Story<InputProps> = (args) => <Input {...args} />

export const largeInput = Template.bind({})
largeInput.args = {
  placeholder: 'Invictus Innocent',
  label: 'Your full name',
  name: 'large',
}

export const smallInput = Template.bind({})
smallInput.args = {
  placeholder: 'Invictus Innocent',
  label: 'Your full name',
  name: 'small',
}
