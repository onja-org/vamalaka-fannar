import { Story, Meta } from '@storybook/react'
import { IconSize, Loading, SizeType } from './Loading'

export default {
  title: 'components/Loading',
  component: Loading,
} as Meta

const Template: Story<SizeType> = (args) => <Loading {...args} />

export const LargeLoading = Template.bind({})
LargeLoading.args = {
  size: IconSize.xl,
}

export const MediumLoading = Template.bind({})
MediumLoading.args = {
  size: IconSize.md,
}

export const SmallLoading = Template.bind({})
SmallLoading.args = {
  size: IconSize.sm,
}

export const ExtremelySmallLoading = Template.bind({})
ExtremelySmallLoading.args = {
  size: IconSize.esm,
}
