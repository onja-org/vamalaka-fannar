import React from 'react'
import { Story, Meta } from '@storybook/react'
import { RoundedCornerImage, RoundImageProps } from './RoundedCornerImage'
import roundedSvg from './round-image.svg'

export default {
  title: 'Components/RoundedCornerImage',
  component: RoundedCornerImage,
} as Meta

const Template: Story<RoundImageProps> = (args) => (
  <RoundedCornerImage {...args} />
)

export const RoundedImage = Template.bind({})
RoundedImage.args = {
  alt: 'rounded courner image',
  imageSource: roundedSvg,
  onClick: () => {},
}
