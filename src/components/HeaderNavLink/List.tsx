import { FC } from 'react'
import styled from 'styled-components'

export const ListItem = styled.li`
  padding: 0;
  margin: 0;
  display: flex;
  list-style-type: none;
  gap: 24px;
  justify-content: flex-end;
  align-items: center;
  width: max-content;

  img {
    max-width: 31.25px;
  }
  `;

export const ParentList: FC = ({ children }) => {
  return <ListItem>{children}</ListItem>
}


