import { Story, Meta } from '@storybook/react'
import { SellerPreviewInfo, SellerInfoProperties } from './SellerPreviewInfo'
// import testAccount from '../../assets/testAccount.png'

export default {
  title: 'Components/Seller preview information',
  component: SellerPreviewInfo,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<SellerInfoProperties> = (args) => (
  <SellerPreviewInfo {...args} />
)

export const SellerPreview = Template.bind({})
SellerPreview.args = {
  photos: [],
  username: 'Adolfia',
  location: {
    country: 'Madagascar',
    city: 'Mahanoro',
  },
}
