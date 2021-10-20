import React from 'react'
import { Story, Meta } from '@storybook/react'
import { UploadFile, UploadFileProps } from './UploadFile'


export default {
  title: 'Components/Upload File',
  component: UploadFile,
} as Meta

const Template: Story<UploadFileProps> = (args) => <UploadFile {...args} />

export const UploadFiles = Template.bind({})
UploadFiles.args = {
    image: 'a'
}
