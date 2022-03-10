import React, { useState } from 'react'

import styled from 'styled-components'
import { fonts } from '../../globalStyles/fonts'

export interface InputProps {
  label: string
  placeholder: string
  inputType: string
  inputId: string
  inputValue: string
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined
  errorMessage?: string
}

const InputContainer = styled.div`
  ${fonts}
  font-family: 'Futura Std', Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`

const InputLabel = styled.label`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  justify-content: space-between;
  color: #979797;
  padding-bottom: 6px;
`

const InputElement = styled.input<{
  errorMessage: string | undefined
}>`
  border: ${({ errorMessage }) =>
    errorMessage ? '1px solid red' : '1px solid #979797'};
  ${fonts}
  background: #ffffff;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: ${({ errorMessage }) => (errorMessage ? '#FC462B' : '#979797')};
  outline: none;
  border-radius: 6px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 11px;
  padding-right: 60px;
  font-family: 'Futura Std', Arial, Helvetica, sans-serif;

  &::-webkit-input-placeholder {
    ${fonts}
    font-family: 'Futura Std', Arial, Helvetica, sans-serif;
    color: ${({ errorMessage }) => (errorMessage ? '#FC462B' : '#979797')};
  }

  &:-ms-input-placeholder {
    ${fonts}
    font-family: 'Futura Std', Arial, Helvetica, sans-serif;
    color: ${({ errorMessage }) => (errorMessage ? '#FC462B' : '#979797')};
  }

  &::placeholder {
    ${fonts}
    font-family: 'Futura Std', Arial, Helvetica, sans-serif;
    color: ${({ errorMessage }) => (errorMessage ? '#FC462B' : '#979797')};
  }

  &:focus {
    box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.11);
    border: 1px solid #041d42;
    color: #979797;
  }

  @media (min-width: 901px) {
    padding-left: 30px;
  }
`

const PasswordController = styled.span`
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  text-align: right;
  position: absolute;
  top: 64%;
  right: 6%;
  padding-bottom: 20px;
  padding-right: 20px;
  color: #041d42;
  cursor: pointer;
  max-width: 20px;
  padding-right: 10px;

  @media (min-width: 650px) {
    right: 3%;
  }
`

const ToggleError = styled.span`
  color: #fc462b;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
`
export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  inputType,
  inputId,
  inputValue,
  onChange,
  errorMessage,
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const typePassword = inputType === 'password'
  const togglePassword = isVisible ? 'text' : 'password'

  return (
    <InputContainer>
      <InputLabel htmlFor={inputId}>
        {label}
        {errorMessage && <ToggleError>{errorMessage}</ToggleError>}
      </InputLabel>

      <InputElement
        type={typePassword ? togglePassword : inputType}
        id={inputId}
        placeholder={placeholder}
        errorMessage={errorMessage}
        value={inputValue}
        onChange={onChange}
        autoComplete='off'
        required
      />
      {typePassword && (
        <PasswordController onClick={() => setIsVisible(!isVisible)}>
          Show
        </PasswordController>
      )}
    </InputContainer>
  )
}

export default Input
