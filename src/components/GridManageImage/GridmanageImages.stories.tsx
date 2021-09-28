import React from 'react'
import { Story, Meta } from '@storybook/react'
import { GridManageImages, GridImageProps } from './GridManageImages'

export default {
  title: 'Components/Grid Manage Image',
  component: GridManageImages,
} as Meta

const Template: Story<GridImageProps> = (args) => <GridManageImages {...args} />

export const GridImage = Template.bind({})
