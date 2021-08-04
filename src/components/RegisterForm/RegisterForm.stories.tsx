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
  errorMes: 'Invalid email. Please try again!',
  onSubmit: () => {},
}

export const formWithoutError = Template.bind({})
formWithoutError.args = {
  isError: false,
}
