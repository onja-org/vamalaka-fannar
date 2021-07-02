import React from 'react'
import styled from 'styled-components'
import { fonts } from '../../globalStyles/fonts'

export interface CategoryItemProp {
  item: string
  primary: boolean
  selectCategory: () => void
}

export const CategoryItem: React.FC<CategoryItemProp> = ({
  item,
  primary = true,
  selectCategory,
}) => {
  return (
    <Button
      style={primary ? primaryColor.button : secondaryColor.button}
      onClick={selectCategory}>
      {item}
    </Button>
  )
}

const Button = styled.button`
  ${fonts}
  font-family: 'Futura Std', Arial, Helvetica, sans-serif;
  width: 100%;
  cursor: pointer;
  margin-left: 0;
  font-size: 18px;
  padding: 8px 0 8px 0;
  max-width: 214px;
  font-weight: normal;
  box-sizing: border-box;
  border: 0.5px solid #158cb1;

  @media (min-width: 600px) {
    font-size: 24px;
    padding: 11px 0 11px 0;
  }
`
const primaryColor = {
  button: {
    color: '#041d42',
    background: '#ffffff',
  },
}

const secondaryColor = {
  button: {
    color: '#ffffff',
    background: '#041d42',
  },
}
