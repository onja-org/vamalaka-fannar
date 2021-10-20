import { FC } from 'react'
import styled from 'styled-components'

export const ListItem = styled.li`
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
  `;

export const ParentList: FC = ({ children }) => {
  return <ListItem>{children}</ListItem>
}


