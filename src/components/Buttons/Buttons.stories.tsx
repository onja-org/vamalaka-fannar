import { Story, Meta } from '@storybook/react'
import Buttons from './Buttons'
import { ButtonsProps } from './Buttons'
export default {
  title: 'Components/Buttons',
  component: Buttons,
} as Meta
const Button: Story<ButtonsProps> = (args) => <Buttons {...args} />
export const LearnAbled = Button.bind({})
LearnAbled.args = {
  learnabled: true,
  label: 'Learn more',
}
export const LearnDisabled = Button.bind({})
LearnDisabled.args = {
  learnabled: true,
  disabled: true,
  label: 'Learn more',
}
export const Trust = Button.bind({})
Trust.args = {
  learnabled: false,
  label: 'Can you trust us?',
}
