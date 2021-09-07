import { Story, Meta } from '@storybook/react'
import { SubtitleInfo } from './SubtitleInfo'

export default {
  title: 'Components/subtitle',
  component: SubtitleInfo,
} as Meta

const Template: Story = (args) => <SubtitleInfo {...args} />

export const subtitle = Template.bind({})
