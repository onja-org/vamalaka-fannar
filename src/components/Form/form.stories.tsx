import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Form, FormProps } from './form'

export default {
  title: 'Input/Form',
  component: Form,
} as Meta

const Template: Story<FormProps> = (args) => <Form {...args} />

export const forms = Template.bind({})
forms.args = {
  input: {
    name: 'input',
    label: 'Your full name',
    placeholder: 'Invictus Innocent',
    // name: 'large',
    value: 'value',
    onChange: () => {},
  },
  button: {
    type: '',
    label: 'Register Account',
    learnEnabled: true,
    disabled: false,
    onClick: () => {
      alert('Click me')
    },
  },
  condition: {
    termsLabel: 'I agree to the',
    href: '/',
    serviceTerms: 'terms and conditions',
    isChecked: false,
  },
}
