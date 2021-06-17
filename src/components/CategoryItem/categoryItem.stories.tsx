import React from 'react'
import { Story, Meta } from '@storybook/react'

import { CategoryItem, CategoryItemProp } from './categoryItem'

export default {
  title: 'Components/Category item',
  component: CategoryItem,
} as Meta

const Template: Story<CategoryItemProp> = (args) => <CategoryItem {...args} />

export const Primary = Template.bind({})
Primary.args = {
  item: 'Food',
  primary: true,
  selectCategory: () => alert('You selected food'),
}

export const Secondary = Template.bind({})
Secondary.args = {
  item: 'Everything',
  primary: false,
}
