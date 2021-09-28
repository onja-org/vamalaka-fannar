import React from 'react'
import { Story, Meta } from '@storybook/react'
import imageWithStar from '../../images/image-with-star.svg'
import imageNoStar from '../../images/round-no-star.svg'
import emptyImage from '../../images/empty-image.svg'
import { ManageImageProps, ManageRoundedImage } from './ManageRoundedImage'

export default {
  title: 'Components/Manage Rounded Image',
  component: ManageRoundedImage,
} as Meta

const Template: Story<ManageImageProps> = (args) => (
  <ManageRoundedImage {...args} />
)

export const ImageWithStart = Template.bind({})
ImageWithStart.args = {
  alt: 'rounded courner image with star',
  imageSource: imageWithStar,
  showStar: true,
}

export const ImageNoStar = Template.bind({})
ImageNoStar.args = {
  alt: 'rounded courner image without start',
  imageSource: imageNoStar,
  showStar: false,
  onDeleteImage: () => {},
}

export const EmptyImage = Template.bind({})
EmptyImage.args = {
  showStar: false,
  emptyImage: emptyImage,
}
