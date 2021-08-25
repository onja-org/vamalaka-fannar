import { Story, Meta } from '@storybook/react'
import { IntroContent } from '../IntroContent/IntroContent'

export default {
  title: 'Components/IntroContent',
  component: IntroContent,
} as Meta

const Template: Story = (args) => <IntroContent {...args} />

export const Content = Template.bind({})
