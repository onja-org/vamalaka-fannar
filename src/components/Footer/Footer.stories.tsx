import { Story, Meta } from '@storybook/react'
import { LinkSection, SectionLinkProps } from './Footer'
import { FooterFonts } from './Footer'

export default {
  title: 'Components/LinkSection',
  component: LinkSection,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
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
  footerLink: {
    summary: 'Madamada',
    links: [
      { linkContent: 'about', linkUrl: '#about' },
      { linkContent: 'careers', linkUrl: '#careers' },
      { linkContent: 'pricing', linkUrl: '#pricing' },
      { linkContent: 'FAQ', linkUrl: '#faq' },
    ],
    id: '1',
  },
}

export const Second = Template.bind({})
Second.args = {
  footerLink: {
    summary: 'Madamada',
    links: [
      { linkContent: 'about', linkUrl: '#about' },
      { linkContent: 'careers', linkUrl: '#careers' },
      { linkContent: 'pricing', linkUrl: '#pricing' },
      { linkContent: 'FAQ', linkUrl: '#faq' },
      { linkContent: 'About', linkUrl: '#about' },
      { linkContent: 'Careers', linkUrl: '#careers' },
      { linkContent: 'Pricing', linkUrl: '#pricing' },
    ],
    id: '1',
  },
}
