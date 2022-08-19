import React from 'react'
import { Story, Meta } from '@storybook/react'

import { LimiteThumbnailProps, LimiteThumbnail } from './LimiteThumbnail'
export default {
  title: 'ImageLimite/LimiteThumbnail',
  component: LimiteThumbnail,
} as Meta

const Template: Story<LimiteThumbnailProps> = (args) => <LimiteThumbnail {...args} />

export const Text = Template.bind({})

Text.args = {
  text: `Maximum number of 6 images reached.
  Please remove existing one to upload new`,
}