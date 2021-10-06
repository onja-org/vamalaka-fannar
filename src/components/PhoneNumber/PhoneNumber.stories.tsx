import { Meta, Story } from '@storybook/react'
import PhoneNumber, { PropType } from './PhoneNumber'

export default {
  title: 'Components/Phone Number',
  component: PhoneNumber,
} as Meta

const Template: Story<PropType> = (args) => <PhoneNumber {...args} />
export const RevealPhoneNumber = Template.bind({})
RevealPhoneNumber.args = {
  label: 'Reveal phone number',
  number: '+261348113468'
}
