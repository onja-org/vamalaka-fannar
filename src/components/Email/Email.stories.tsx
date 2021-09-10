import { Meta, Story } from '@storybook/react'
import Email from './Email'

export default {
  title: 'Components/Email',
  component: Email,
} as Meta

const Template: Story = (args) => <Email {...args} />
export const Emailing = Template.bind({})
