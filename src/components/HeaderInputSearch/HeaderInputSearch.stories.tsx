import React, { FC } from 'react'
import { Meta, Story } from '@storybook/react'
import Input, { InputType } from './HeaderInputSearch'
import searchIcon from '../../assests/searchIcon.svg'
export default {
  title: 'Header/Input',
  component: Input,
} as Meta
const Template: Story<InputType> = (args) => <Input {...args} />
export const InputElement = Template.bind({})
InputElement.args = {
  placeholderText: 'Search for anything...',
  alt: 'Input search',
  icon: searchIcon,
}
