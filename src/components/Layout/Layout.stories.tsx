import React from 'react'
import { Story, Meta, addDecorator } from '@storybook/react'
import { Layout, LayoutProps } from './Layout'
import { Header } from '../Header'
import { PageFooter as Footer } from '../PageFooter/PageFooter'
import { MemoryRouter } from 'react-router'

addDecorator((story) => (
  <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
))

export default {
  title: 'Components/Layout',
  component: Layout,
} as Meta

const headerItems = [
  { path: '#language', imgSrc: 'language', alt: 'Languages', text: 'English' },
]

const footerItems = [
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
    summary: 'Vamalaka',
    links: [
      { linkContent: 'about', linkUrl: '#about' },
      { linkContent: 'careers', linkUrl: '#careers' },
      { linkContent: 'pricing', linkUrl: '#pricing' },
      { linkContent: 'FAQ', linkUrl: '#faq' },
    ],
    id: '2',
  },
]

const Template: Story<LayoutProps> = (args) => <Layout {...args} />

export const PageHeader = Template.bind({})
PageHeader.args = {
  children: <Header item={headerItems} />,
}
export const PageFooter = Template.bind({})
PageFooter.args = {
  children: <Footer footerLinks={footerItems} />,
}
