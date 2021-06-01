import { Story, Meta } from '@storybook/react'
import { LinkSection, SectionLinkProps } from './Footer'
import {FooterFonts} from './Footer';

export default {
	title: 'Components/LinkSection',
	component: LinkSection,
	argTypes: {
		backgroundColor: { control: 'color' }
	}
} as Meta


const Template: Story<SectionLinkProps> = (args) => {
	return (
		<>
		 	<FooterFonts />
			<LinkSection {...args} />
		</>
	)
}

export const First = Template.bind({})
First.args = {
	text: [ 'about', 'Careers', 'Pricing', 'FAQ' ]
}

export const Second = Template.bind({})
Second.args = {
	text: [
		'about', 'Careers', 'Pricing', 'FAQ', 'about', 'Careers', 'Pricing', 'FAQ'
	]
}
