import { Story, Meta } from '@storybook/react'
import { LoginForm, LoginType } from './LoginForm'

export default {
  title: 'Components/Login form',
  component: LoginForm,
} as Meta

const Template: Story<LoginType> = (args) => <LoginForm {...args} />
export const LoginWithoutError = Template.bind({})
LoginWithoutError.args = {
  onSubmit: () => {},
}

export const LoginWithError = Template.bind({})
LoginWithError.args = {
  errorMes: 'Invalid email. Please try again!',
  onSubmit: () => {},
}
