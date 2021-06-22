import React from 'react'

export interface LayoutProps {
  children: JSX.Element
}

export const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return <>{children}</>
}
