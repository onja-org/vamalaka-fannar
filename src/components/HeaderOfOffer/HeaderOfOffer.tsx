import React from 'react'
import { HeaderStyle } from '../../redux/Style'

export interface HeaderProps {
  name?: string
}

export const HeaderOfOffer: React.FC<HeaderProps> = ({ name }) => (
  <HeaderStyle>{name}</HeaderStyle>
)
