import { Story, Meta } from '@storybook/react'
import Buttons from './Buttons'
import { ButtonsProps } from './Buttons'

export default {
  title: 'Components/Buttons',
  component: Buttons,
} as Meta

const Button: Story<ButtonsProps> = (args) => <Buttons {...args} />
export const LearnEnabled = Button.bind({})
LearnEnabled.args = {
  learnEnabled: true,
  label: 'Learn more',
}
export const Learndisabled = Button.bind({})
Learndisabled.args = {
  learnabled: true,
  disabled: true,
  label: 'Learn more',
}
export const Trust = Button.bind({})
Trust.args = {
  learnEnabled: false,
  label: 'Can you trust us?',
}
