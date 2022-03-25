import { Story, Meta } from '@storybook/react'
import { DropDownImage, dropDownProps } from './DropDownImage'

export default {
  title: 'Components/drop down image',
  component: DropDownImage,
} as Meta

const Template: Story<dropDownProps> = (args) => <DropDownImage {...args} />

export const dropDown = Template.bind({})
dropDown.args= {
  file: 'file-upload',
}
