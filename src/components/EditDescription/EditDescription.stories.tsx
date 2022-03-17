import { Story, Meta } from '@storybook/react'
import { EditDescription, EditDescriptionProp } from './EditDescription'

export default {
  title: 'Header/EditDescription',
  component: EditDescription,
} as Meta

const Template: Story<EditDescriptionProp> = (args) => (
  <EditDescription {...args} />
)

export const LogoTemplate = Template.bind({})
LogoTemplate.args = {
  textdescription: "This is an offer's description",
  label: 'Description',
}
