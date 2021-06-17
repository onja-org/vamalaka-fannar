import { Story, Meta } from '@storybook/react'

import { HeaderOfOffer, HeaderProps } from './HeaderOfOffer'
export default {
  title: 'Offer/HeaderOfOffer',
  component: HeaderOfOffer,
} as Meta

const Template: Story<HeaderProps> = (args) => <HeaderOfOffer {...args} />

export const Title = Template.bind({})

Title.args = {
  name: 'Cocoa nuts',
}
