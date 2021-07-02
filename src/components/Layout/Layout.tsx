import React from 'react'
import styled from 'styled-components'

export interface LayoutProps {
  children: JSX.Element
}

export const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
`
