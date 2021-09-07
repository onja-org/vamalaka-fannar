import { Story, Meta } from '@storybook/react'
import { DisplayDiscover, ContentProps } from './DisplayDiscover'

export default {
  title: 'Components/display',
  component: DisplayDiscover,
} as Meta

const Template: Story<ContentProps> = (args) => <DisplayDiscover {...args} />

export const discover = Template.bind({})
