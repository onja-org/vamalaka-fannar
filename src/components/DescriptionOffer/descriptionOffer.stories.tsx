import * as React from 'react'
import { Story, Meta } from '@storybook/react'
import { DescriptionOffer, Props } from '../DescriptionOffer/descriptionOffer'

export default {
  title: 'Components/description Offer',
  component: DescriptionOffer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<Props> = (args) => <DescriptionOffer {...args} />

export const Description = Template.bind({})
Description.args = {
  text:
    'This is a very detailed description that is absolutely neccessary for being attractive to customers...',
}

export const LongDescription = Template.bind({})
LongDescription.args = {
  text:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
}
