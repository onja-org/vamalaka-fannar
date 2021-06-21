import React from 'react'
import { Story, Meta } from '@storybook/react'

import { PriceOfOffer, PriceOfOfferProps } from './PriceOfOffer'

export default {
  title: 'PriceOfOffer/PriceOfOffer',
  component: PriceOfOffer,
} as Meta

const PriceOfOfferStoryBook: Story<PriceOfOfferProps> = (args) => (
  <PriceOfOffer {...args} />
)

export const MalagasyPice = PriceOfOfferStoryBook.bind({})
MalagasyPice.args = {
  value: 1000,
  unit: 'peice',
  currency: 'Ariary',
}

export const DollarPrice = PriceOfOfferStoryBook.bind({})
DollarPrice.args = {
  value: 2332,
  unit: 'kilo',
  currency: 'Dollar',
}

export const EuroPrice = PriceOfOfferStoryBook.bind({})
EuroPrice.args = {
  value: 12213,
  unit: 'sobika',
  currency: 'Euro',
}
