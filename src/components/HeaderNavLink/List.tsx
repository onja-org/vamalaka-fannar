import React, { FC } from 'react'
import styled from 'styled-components'

export const ParentList: FC = ({ children }) => {
  return <List>{children}</List>
}

export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  list-style-type: none;
  gap: 14px;
  justify-content: flex-end;
  align-items: center;
  width: max-content;
  justify-self: end;

  img {
    max-width: 22px;
  }
`
