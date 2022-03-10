import { Story, Meta } from '@storybook/react'
import { DropDown, SelectProps } from './DropDown'

export default {
  title: 'Header/DropDown',
  component: DropDown,
} as Meta

const selectCategory = [
  { label: 'Category', value: 'category' },
  { label: 'Food', value: 'food' },
]
const selectCurency = [{ label: 'currency', value: 'currency' }]
const Template: Story<SelectProps> = (args) => <DropDown {...args} />

export const LogoTemplate = Template.bind({})
LogoTemplate.args = {
  name: 'drop',
  options: selectCategory,
  label: 'Category',
  placeholder: 'category',
}
export const Currency = Template.bind({})
Currency.args = {
  name: 'drop',
  options: selectCurency,
  label: 'Category',
  placeholder: 'currency',
}
