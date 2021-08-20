import { Story, Meta } from '@storybook/react'
import { LoginForm } from './LoginForm'

export default {
  title: 'Components/Login form',
  component: LoginForm,
} as Meta

const Template: Story = (args) => <LoginForm {...args} />
export const LoginWithoutError = Template.bind({})
LoginWithoutError.args = {
  isError: true,
}

export const LoginWithError = Template.bind({})
LoginWithError.args = {
  isError: true,
  errorMes: 'Invalid email. Please try again!',
}
