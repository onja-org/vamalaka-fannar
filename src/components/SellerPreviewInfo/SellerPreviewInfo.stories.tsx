import { Story, Meta } from '@storybook/react'
import SellerPrevImage from '../../stories/assets/seller-prev-img.png'
import { SellerPreviewInfo, SellerInfoProperties } from './SellerPreviewInfo'

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
  user: {
    username: 'Eliud',
    email: 'Eliud@gmail.com',
    id: 'aaa',
    photos: [{ url: '', info: '', isPrimary: false }],
  },
  location: {
    country: 'Madagascar',
    city: 'Mahanoro',
  },
}
