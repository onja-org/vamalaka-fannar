import { Story, Meta } from '@storybook/react'

import { InputSelect, SelectProps } from './InputSelect'

export default {
  title: 'Select/Select',
  component: InputSelect,
} as Meta

const options = ['Category 1', 'Category 2']
const Template: Story<SelectProps> = (args) => <InputSelect {...args} />

export const selectDropdown = Template.bind({})
selectDropdown.args = {
    placeholder: 'SELECT CATEGORY',
    label: 'Category',
    selectName: 'Category',
    options: options
}  