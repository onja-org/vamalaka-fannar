import React from 'react'
import styled from 'styled-components'
import { fonts } from '../../globalStyles/fonts'

const Text = styled.p`
  ${fonts}
  font-family: 'Futura Std', Arial, Helvetica, sans-serif;
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
