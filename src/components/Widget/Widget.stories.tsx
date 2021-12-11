import React from 'react'
import { Story, Meta } from '@storybook/react'
import Widget, {WidgetsProps} from './Widget'
import profilePicture from '../../assets/profile-image.png'

export default {
  title: 'Components/Widget',
  component: Widget,
} as Meta

const Template: Story<WidgetsProps> = (args) => <Widget {...args} />

export const Widgets = Template.bind({})
Widgets.args = {
  src: profilePicture, 
  alt: "Profile picture", 
  offersNumber: 3, 
  offersLabel: "Offers", 
  logOutLabel: "Log out",
  profileName: "Adolfina"
}