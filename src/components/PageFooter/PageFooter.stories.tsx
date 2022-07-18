import { Story, Meta, addDecorator } from '@storybook/react'
import { MemoryRouter } from 'react-router'
import { PageFooter, Props } from './PageFooter'

addDecorator((story) => (
  <MemoryRouter initialEntries={['/']}>{story() as any}</MemoryRouter>
))

export default {
  title: 'Components/Page Footer',
  component: PageFooter,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<Props> = (args) => <PageFooter {...args} />

export const PageFooterFirstView = Template.bind({})
PageFooterFirstView.args = {
  footerLinks: [
    {
      summary: 'Madamada sugi',
      links: [
        { linkContent: 'about', linkUrl: '#about' },
        { linkContent: 'careers', linkUrl: '#careers' },
        { linkContent: 'pricing', linkUrl: '#pricing' },
        { linkContent: 'FAQ', linkUrl: '#faq' },
      ],
      id: '1',
    },
    {
      summary: 'Vamalaka',
      links: [
        { linkContent: 'about', linkUrl: '#about' },
        { linkContent: 'careers', linkUrl: '#careers' },
        { linkContent: 'pricing', linkUrl: '#pricing' },
        { linkContent: 'FAQ', linkUrl: '#faq' },
      ],
      id: '2',
    },
  ],
}

export const PageFooterSecondView = Template.bind({})
PageFooterSecondView.args = {
  footerLinks: [
    {
      summary: 'Madamada',
      links: [
        { linkContent: 'about', linkUrl: '#about' },
        { linkContent: 'careers', linkUrl: '#careers' },
        { linkContent: 'pricing', linkUrl: '#pricing' },
        { linkContent: 'FAQ', linkUrl: '#faq' },
        { linkContent: 'About', linkUrl: '#about' },
      ],
      id: '1',
    },
    {
      summary: 'Vamalaka',
      links: [
        { linkContent: 'about', linkUrl: '#about' },
        { linkContent: 'careers', linkUrl: '#careers' },
        { linkContent: 'pricing', linkUrl: '#pricing' },
        { linkContent: 'FAQ', linkUrl: '#faq' },
      ],
      id: '2',
    },
    {
      summary: 'LearnGasy',
      links: [
        { linkContent: 'about', linkUrl: '#about' },
        { linkContent: 'careers', linkUrl: '#careers' },
        { linkContent: 'pricing', linkUrl: '#pricing' },
        { linkContent: 'FAQ', linkUrl: '#faq' },
        { linkContent: 'Others', linkUrl: '#others' },
      ],
      id: '3',
    },
    {
      summary: 'Vamalaka Developers',
      links: [
        { linkContent: 'about', linkUrl: '#about' },
        { linkContent: 'careers', linkUrl: '#careers' },
        { linkContent: 'pricing', linkUrl: '#pricing' },
        { linkContent: 'FAQ', linkUrl: '#faq' },
      ],
      id: '4',
    },
    {
      summary: 'Others',
      links: [
        { linkContent: 'about', linkUrl: '#about' },
        { linkContent: 'careers', linkUrl: '#careers' },
        { linkContent: 'pricing', linkUrl: '#pricing' },
        { linkContent: 'FAQ', linkUrl: '#faq' },
      ],
      id: '5',
    },
  ],
}
