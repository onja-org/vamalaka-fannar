import { Story, Meta } from '@storybook/react'
import { Categories, CategoryProps } from './Categories'

export default {
  title: 'Components/Categories',
  component: Categories,
} as Meta

const CategoriesStory: Story<CategoryProps> = (args) => <Categories {...args} />
export const MultipleCategories = CategoriesStory.bind({})

const categories = [
  { id: '1', title: 'Food' },
  { id: '2', title: 'Handmade' },
  { id: '3', title: 'Spices' },
  { id: '4', title: 'Collectibles' },
]

MultipleCategories.args = {
  categories: categories,
  primary: true,
}
