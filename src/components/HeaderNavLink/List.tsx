import React, { FC } from 'react'
import styled from 'styled-components'

export const ParentList: FC = ({ children }) => {
  return <List>{children}</List>
}

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: baseline;
  gap: 16px;
  margin-left: auto;

  img {
    max-width: 20px;
  }
`
