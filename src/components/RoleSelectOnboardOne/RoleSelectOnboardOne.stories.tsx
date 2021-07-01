import { Story, Meta } from '@storybook/react'
import {RoleSelectOnboardOne} from './RoleSelectOnboardOne'
import { Props } from '../PageFooter/PageFooter'

export default {
	title: 'Components/RoleSelectOnboardOne',
	component: RoleSelectOnboardOne,
	argTypes: {
		backgroundColor: { control: 'color' }
	}
} as Meta

const footerLinks = [
    {
      summary: 'Madamada',
      links: [
        { linkContent: 'about', linkUrl: '#about' },
        { linkContent: 'careers', linkUrl: '#careers' },
        { linkContent: 'pricing', linkUrl: '#pricing' },
        { linkContent: 'FAQ', linkUrl: '#faq' },
      ],
      id: '1',
    },
    {
      summary: 'Madamada',
      links: [
        { linkContent: 'about', linkUrl: '#about' },
        { linkContent: 'careers', linkUrl: '#careers' },
        { linkContent: 'pricing', linkUrl: '#pricing' },
        { linkContent: 'FAQ', linkUrl: '#faq' },
      ],
      id: '2',
    },
    {
      summary: 'Madamada',
      links: [
        { linkContent: 'about', linkUrl: '#about' },
        { linkContent: 'careers', linkUrl: '#careers' },
        { linkContent: 'pricing', linkUrl: '#pricing' },
        { linkContent: 'FAQ', linkUrl: '#faq' },
      ],
      id: '3',
    },
    {
      summary: 'Madamada',
      links: [
        { linkContent: 'about', linkUrl: '#about' },
        { linkContent: 'careers', linkUrl: '#careers' },
        { linkContent: 'pricing', linkUrl: '#pricing' },
        { linkContent: 'FAQ', linkUrl: '#faq' },
      ],
      id: '4',
    },
    {
      summary: 'Madamada',
      links: [
        { linkContent: 'about', linkUrl: '#about' },
        { linkContent: 'careers', linkUrl: '#careers' },
        { linkContent: 'pricing', linkUrl: '#pricing' },
        { linkContent: 'FAQ', linkUrl: '#faq' },
      ],
      id: '5',
    },
]


const Template: Story<Props> = (args) => <RoleSelectOnboardOne {...args} />



export const RoleSelectOnBoardOneStory = Template.bind({})

RoleSelectOnBoardOneStory.args = {footerLinks}