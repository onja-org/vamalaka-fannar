import React from 'react'
import styled from 'styled-components'
import { fonts } from '../../globalStyles/fonts'

export interface ButtonProps {
  label: string | undefined
  isPrimary?: boolean
  disabled?: boolean
  onClick?: () => void
  type: 'button' | 'submit' | 'reset' | undefined
  icon?: string
}
const ButtonStyled = styled.button<ButtonProps>`
  ${fonts}
  transform: translate(3px, -3px);
  outline: none;
  font-size: 24px;
  line-height: 27px;
  font-style: normal;
  font-weight: normal;
  font-family: 'Garamond';
  color: ${(props) => (props.isPrimary ? '#FFFFFF' : '#041d42')};
  background-color: ${(props) => (props.isPrimary ? '#041d42' : '#FFFFFF')};
  padding: ${(props) =>
    props.isPrimary ? '12px 20px 11px 20px' : '12px 10px 11px 10px'};
  border: ${(props) => (props.isPrimary ? 'none' : '2px solid #041d42')};
    props.isPrimary ? '12px 20px 11px 20px' : '12px 28px 11px 28px'};
  cursor: pointer;

  display: ${(props) => !props.isPrimary && 'flex'};
  justify-content: ${(props) =>
    !props.isPrimary ? 'space-between' : 'center'};
  align-items: ${(props) => !props.isPrimary && 'center'};


  &:disabled {
    color: '#FFFFFF';
    cursor: not-allowed;
    background-color: gray;
  }
  img {
    margin-inline-end: 10px;
  }
  box-shadow: -3px 3px rgba(21, 140, 177, 0.3), 3px -3px rgba(252, 70, 43, 0.3); 
`
const Button: React.FC<ButtonProps> = ({
  label,
  disabled,
  isPrimary,
  type,
  icon,
}) => {
  return (
    <>
      <ButtonStyled
        label={label}
        disabled={disabled}
        isPrimary={isPrimary}
        onClick={() => {}}
        type={type}>
        {icon && <img src={icon} alt='icon' />}
        <span>{label}</span>
      </ButtonStyled>
    </>
  )
}
export default Button
