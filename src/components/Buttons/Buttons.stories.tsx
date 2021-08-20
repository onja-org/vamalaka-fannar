import { Story, Meta } from '@storybook/react'
import Button from './Buttons'
import { ButtonProps } from './Buttons'
import googleIcon from '../../icons/google.png'
import loadingIcon from '../../icons/small-load-icon.png'

export default {
  title: 'Components/Buttons',
  component: Button,
} as Meta

const ButtonStory: Story<ButtonProps> = (args) => <Button {...args} />
export const LearnEnabled = ButtonStory.bind({})
LearnEnabled.args = {
  isPrimary: true,
  label: 'Learn more',
  type: 'button',
}
export const Learndisabled = ButtonStory.bind({})
Learndisabled.args = {
  isPrimary: true,
  disabled: true,
  label: 'Learn more',
  type: 'button',
}
export const Trust = ButtonStory.bind({})
Trust.args = {
  isPrimary: false,
  label: 'Can you trust us?',
  icon: googleIcon,
  type: 'button',
}
