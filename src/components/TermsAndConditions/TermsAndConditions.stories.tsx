import React from 'react'
import { Story, Meta } from '@storybook/react'
import {
  TermsAndConditions,
  TermsAndConditionsProps,
} from './TermsAndConditions'

export default {
  title: 'Components/TermsAndConditions',
  component: TermsAndConditions,
} as Meta

const Template: Story<TermsAndConditionsProps> = (args) => (
  <TermsAndConditions {...args} />
)

export const UnChecked = Template.bind({})
UnChecked.args = {
  termsLabel: 'I agree to the',
  serviceTerms: 'terms & conditions',
  href: '/',
}

export const Checked = Template.bind({})
Checked.args = {
  termsLabel: 'I agree to the',
  serviceTerms: 'terms & conditions',
  href: '/',
  isChecked: true,
}
