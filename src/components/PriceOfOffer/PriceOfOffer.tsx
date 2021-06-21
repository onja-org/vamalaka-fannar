import React from 'react'
import styled from 'styled-components'

import GaramondWoff from '../../fonts/Garamond.woff'
import GaramondWoff2 from '../../fonts/Garamond.woff2'

export interface PriceOfOfferProps {
  value: number
  unit: string
  currency: string
}

export const PriceOfOffer: React.FC<PriceOfOfferProps> = ({
  value,
  unit,
  currency,
}) => {
  return (
    <Price>
      {currency === 'Dollar' ? '$' : currency === 'Euro' ? '€' : 'Ar'}
      {value}/{unit}
    </Price>
  )
}

const Price = styled.p`
  @font-face {
    font-family: 'Garamond';
    src: local('Garamond'), local('Garamond'),
      url(${GaramondWoff2}) format('woff2'), url(${GaramondWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
  }

  font-family: 'Garamond';
  font-size: 14px;
  line-height: 16px;
  color: #041d42;

  @media (min-width: 362px) {
    font-size: 16px;
    line-height: 18px;
  }
`
