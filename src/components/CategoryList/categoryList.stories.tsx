import React from 'react'
import { Story, Meta } from '@storybook/react'

import { CategoryList, CategoryListProps } from './categoryList'

export default {
  title: 'Components/Category List',
  component: CategoryList,
} as Meta

const Template: Story<CategoryListProps> = (args) => <CategoryList {...args} />

const categories = [
  { id: '1', title: 'Food' },
  { id: '2', title: 'Handmade' },
  { id: '3', title: 'Spices' },
  { id: '4', title: 'Collectibles' },
]

export const MultipleItems = Template.bind({})
MultipleItems.args = {
  categories: categories,
  primary: true,
}
