import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Offer, OfferProps } from './Offer'

import Image from '../../stories/assets/offer.svg'
import SellerPrevImage from '../../stories/assets/seller-prev-img.png'

export default {
  title: 'Offer/Offer',
  component: Offer,
} as Meta

const Template: Story<OfferProps> = (args) => <Offer {...args} />
export const OfferComponent = Template.bind({})
OfferComponent.args = {
  imageForOffer: Image,
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
  profile: SellerPrevImage,
  name: {
    firstName: 'Eliud',
    lastName: 'Kipchoge',
  },
  location: {
    country: 'Madagascar',
    city: 'Mahanoro',
  },
}
