import { Meta, Story } from '@storybook/react'
import AddToFavorite, { PropType } from './AddToFavorite'

export default {
  title: 'Components/Add to favorite',
  component: AddToFavorite,
} as Meta

const Template: Story<PropType> = (args) => <AddToFavorite {...args} />
export const AddHimToFavorite = Template.bind({})
AddHimToFavorite.args = {
  name: 'Johnny',
}
