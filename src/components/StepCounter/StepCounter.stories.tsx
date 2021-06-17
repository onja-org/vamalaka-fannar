import React from 'react'
import { Story, Meta } from '@storybook/react'

import StepCounter, { StepProps } from './StepCounter'

export default {
  title: 'StepCounter/StepCounter',
  component: StepCounter,
} as Meta

const Template: Story<StepProps> = (args) => <StepCounter {...args} />

export const StepOne = Template.bind({})
StepOne.args = {
  stepNum: '01',
  stepName: 'Personal Info.',
}

export const StepTwo = Template.bind({})
StepTwo.args = {
  stepNum: '02',
  stepName: 'Email Verification',
}
