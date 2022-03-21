import { Story, Meta } from '@storybook/react'
import SellerPrevImage from '../../stories/assets/seller-prev-img.png'
import OfferDetail, { OfferDetailsProps } from './OfferDetails';

export default {
  title: 'Offer/Offer details',
  component: OfferDetail,
} as Meta

const Template: Story<OfferDetailsProps> = (args) => <OfferDetail {...args} />
export const OfferDetailsComponent = Template.bind({})
OfferDetailsComponent.args = {
  imageDescription: 'Image of offer',
  offerName: 'Cocoa nuts',
  currency: 'Euro',
  amount: 25.0,
  unit: 'kilo',
  stars: 3,
  ratingDescription: 'star',
  amountOfProduct: 27,
  offerDescription:
    'This is a very detailed description that is absolutely necessary for being attractive to customers...',
  user: {
    username: 'Eliud',
    photos:[],
    location: {
      country: 'Madagascar',
      city: 'Toamasina'
    }
  },
  name: {
    firstName: 'Eliud',
    lastName: 'Kipchoge',
  },
  location: {
    country: 'Madagascar',
    city: 'Mahanoro',
  },
}
