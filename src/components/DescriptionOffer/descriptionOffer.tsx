import React from 'react'
import styled from 'styled-components'
import FuturaStdLightWoff from '../../fonts/FuturaStd-Light.woff'
import FuturaStdLightWoof2 from '../../fonts/FuturaStd-Light.woff2'

const Text = styled.p`
  @font-face {
    font-family: Futura Std;
    font-style: normal;
    font-weight: 400;
    src: local('Futura Std'), url('${FuturaStdLightWoff}') format('woff'),
      url('${FuturaStdLightWoof2}') format('woff2');
  }
  font-family: Futura Std;
  color: rgba(151, 151, 151, 1);
  font-size: 14px;
  line-height: 17px;
`
export interface Props {
  text: string
}

export const DescriptionOffer: React.FC<Props> = ({ text }) => {
  return (
    <div>
      <Text>{text}</Text>
    </div>
  )
}
