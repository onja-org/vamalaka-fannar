import { Story, Meta } from '@storybook/react'
import { IntroContent, Props } from '../IntroContent/IntroContent'
import IntroImage from '../../assets/introImage.png'

export default {
  title: 'Components/IntroContent',
  component: IntroContent,
} as Meta

const Template: Story<Props> = (args) => <IntroContent {...args} />

export const Content = Template.bind({})
Content.args = {
  paragraph:
    'Purchase high-quality products made by the people that sell them. By cutting out middlemen, you know exactly where your purchase is from how it was made.',
  title: 'Madagascars peer-to-peer e-commerce platform',
  imageUlr: `${IntroImage}`,
}
