import { Story, Meta } from '@storybook/react'
import { SellerDisplay } from './SellerDisplay'

export default {
  title: 'Components/seller',
  component: SellerDisplay,
} as Meta

const Template: Story = (args) => <SellerDisplay {...args} />

export const seller = Template.bind({})
