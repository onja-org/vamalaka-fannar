import React from 'react'
import { Story, Meta } from '@storybook/react'
import { TextArea, TextAreaProps } from './TextArea'


export default {
  title: 'Components/Textarea',
  component: TextArea,
} as Meta

const Template: Story<TextAreaProps> = (args) => <TextArea {...args} />

export const Textareas = Template.bind({})
Textareas.args = {
    isTall: true,
    label: 'Anything',
    textDescription: ''
}