import { Story, Meta } from '@storybook/react'
import { LeftSide, LeftSideProps } from './LeftSide'

export default {
  title: 'components/LeftSide',
  component: LeftSide,
} as Meta

const Template: Story<LeftSideProps> = (args) => <LeftSide {...args} />

export const ViewWithBaobab = Template.bind({})
ViewWithBaobab.args = {
  backgroundImage: 'Baobab',
}

export const ViewWithFarmer = Template.bind({})
ViewWithFarmer.args = {
  backgroundImage: 'Farmer',
}
