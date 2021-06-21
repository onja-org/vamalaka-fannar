import React from 'react'
import styled from 'styled-components'
import { GaramondWoff } from '../../fonts/Garamond.woff'
import { GaramondWoff2 } from '../../fonts/Garamond.woff2'
export interface ButtonsProps {
  label?: string
  learnabled?: boolean
  disabled?: boolean
  onClick?: () => void
}
const Button = styled.button<ButtonsProps>`
  @font-face {
    font-family: 'Garamond';
    src: local('Garamond'), local('Garamond'),
      url(${GaramondWoff2}) format('woff2'), url(${GaramondWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
  }
  border: none;
  outline: none;
  font-size: 24px;
  line-height: 27px;
  font-style: normal;
  font-weight: normal;
  font-family: Garamond;
  color: ${(props) => (props.learnabled ? '#FFFFFF' : '#041d42')};
  background-color: ${(props) => (props.learnabled ? '#041d42' : '#FFFFFF')};
  padding: ${(props) =>
    props.learnabled ? '12px 20px 11px 20px' : '12px 28px 11px 28px'};
  box-sizing: ${(props) => (props.learnabled ? 'none' : 'border-box')};
  border: ${(props) => (props.learnabled ? 'none' : '2px solid #041d42')};
  cursor: pointer;
  &:disabled {
    color: '#FFFFFF';
    cursor: not-allowed;
    background-color: gray;
  }
`
const Buttons: React.FC<ButtonsProps> = ({
  label,
  onClick,
  disabled,
  learnabled,
  ...props
}) => {
  return (
    <Button
      type='button'
      learnabled={learnabled ? true : false}
      disabled={disabled}
      onClick={() => ''}
      {...props}>
      {label}
    </Button>
  )
}
export default Buttons
