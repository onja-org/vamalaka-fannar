import React, { FC } from 'react'
import styled from 'styled-components'

export const ParentList: FC = ({ children }) => {
  console.log(children);
  
  return <List>{children}</List>
}

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  gap: 24px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: max-content;

  img {
    max-width: 31.25px;
  }
`
