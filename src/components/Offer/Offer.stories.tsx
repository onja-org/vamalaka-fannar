import { Story, Meta } from '@storybook/react'
import { Offer, OfferProps } from './Offer'
import testAccount from '../../assets/testAccount.png'

export default {
  title: 'Offer/Offer',
  component: Offer,
} as Meta

const Template: Story<OfferProps> = (args) => <Offer {...args} />
export const OfferComponent = Template.bind({})
OfferComponent.args = {
  imageDescription: 'Image of offer',
  offerName: 'Cocoa nuts',
  currency: 'Euro',
  amount: 25.0,
  unit: 'kilo',
  star: 3,
  ratingDescription: 'star',
  amountOfProduct: 27,
  offerDescription:
    'This is a very detailed description that is absolutely necessary for being attractive to customers...',
  isLearnEnabled: true,
  isFavourited: false,
  detailButtonText: 'See details',
  favoriteButtonText: 'Add to favourite',
  location: {
    country: 'Madagascar',
    city: 'Mahanoro',
  },
}
