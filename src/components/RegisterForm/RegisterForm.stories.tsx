import React from 'react'
import { Story, Meta } from '@storybook/react'
import { RegisterForm, FormProps } from './RegisterForm'

export default {
  title: 'Input/Form',
  component: RegisterForm,
} as Meta

const Template: Story<FormProps> = (args) => <RegisterForm {...args} />

export const formWithError = Template.bind({})
formWithError.args = {
  isError: true,
  errorMes: {
    username: 'already exist',
    email: 'not valid',
    password: '8 characters',
    confirmPassword: 'does not mutch',
  },
  onSubmit: () => {},
  onChangeEmail: () => null,
  onChangePassword: () => null,
  onChangeUsername: () => null,
  handleCheckbox: () => null,
  onChangeConfirmPassword: () => null,
}

export const formWithoutError = Template.bind({})
formWithoutError.args = {
  isError: false,
  onSubmit: () => {},
  onChangeEmail: () => null,
  onChangePassword: () => null,
  onChangeUsername: () => null,
  handleCheckbox: () => null,
  onChangeConfirmPassword: () => null,
}
