import { Story, Meta } from '@storybook/react'
import { InputEditProfile, PropType } from './InputEditProfile'

export default {
  title: 'Components/InputEditProfile',
  component: InputEditProfile,
} as Meta

const Template: Story<PropType> = (args) => <InputEditProfile {...args} />
export const Input = Template.bind({})

Input.args = {
    label: 'Address',
    placeholder: 'Street, building number'
}