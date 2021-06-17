import React, { FC } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

export const ParentList: FC = ({ children }) => {
  return <List>{children}</List>
}

export const List = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 24px;
  background-color: #fff5f1;
  padding: 22px;
`
