import React from 'react'
import styled from 'styled-components'
import { fonts } from '../../globalStyles/font'

const backIcon = (
  <svg
    width='10'
    height='16'
    viewBox='0 0 10 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M9.37604 1.90245L8.04104 0.574951L0.623535 7.99995L8.04854 15.4249L9.37604 14.0975L3.27854 7.99995L9.37604 1.90245Z'
      fill='currentColor'
    />
  </svg>
)

export interface BackProps {
  size?: 'small' | 'medium' | 'large'
  label: string
  href: string
}

const BackLink = styled.a`
  ${fonts}
​
  --font-size: 16px;
​
  font-family: 'Futura Std', sans-serif;
  line-height: 19px;
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  gap: 5px;
  color: #979797;
  text-decoration: none;
  word-wrap: break-word;
  font-size: var(--font-size);
​
  &.size--small {
    --font-size: 14px;
  }
​
  &.size--medium {
    --font-size: 16px;
  }
  &.size--large {
    --font-size: 24px;
  }
​
  @media (max-width: 375px) {
    --font-size: 12px;
  }
`
export const Back: React.FC<BackProps> = ({
  size = 'medium',
  label,
  href,
  ...props
}) => {
  return (
    <BackLink type='button' href={href} {...props} className={`size--${size}`}>
      {backIcon}
      <span>{label}</span>
    </BackLink>
  )
}
