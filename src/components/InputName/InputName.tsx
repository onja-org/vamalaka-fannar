import React from 'react'

import styled, { css } from 'styled-components'
import { fonts } from '../../globalStyles/fonts'
import { mediaQueries } from '../../mediaQueries/mediaQueries'

const inputStyles = css`
  ${fonts}
  'Futura Std', Arial, Helvetica, sans-serif
  background: #ffffff;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: '#979797';
  outline: none;
  border-radius: 6px;
  }
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  position: relative;
  max-width: 520px;
`

const InputElement = styled.input<{ isError: boolean }>`
  ${fonts}
  font-family: 'Futura Std', Arial, Helvetica, sans-serif;

  &::-webkit-input-placeholder {
    ${fonts}
    font-family: 'Futura Std', Arial, Helvetica, sans-serif;
  }

  &:-ms-input-placeholder {
    ${fonts}
    font-family: 'Futura Std', Arial, Helvetica, sans-serif;
  }

  &::placeholder {
    ${fonts}
    font-family: 'Futura Std', Arial, Helvetica, sans-serif;
  }

  max-width: 426px;
  padding-top: 12px;
  padding-left: 5px;
  padding-bottom: 12px;
  padding-right: 76px;
  box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.11);
  border: 1px solid ${({ isError }) => (isError ? '#fc462b' : '#041d42')};
  ${inputStyles}
`

const LabelStyle = styled.label`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  color: #979797;
  padding-bottom: 6px;
  font-family: 'Futura Std', Arial, Helvetica, sans-serif;
  }
`

const Error = styled.div<{ isError: boolean }>`
  ${(props) =>
    !props.isError
      ? ` color: #fc462b;
          padding-inline-end: 25px;
          `
      : `display: none`};
`

const Label = styled.span`
  text-align: start;
`

const ShowPasswordBtn = styled.button<{ showPwd: boolean }>`
  border: none;
  background-color: transparent;
  position: absolute;
  top: 65%;
  right: 10px;
  cursor: pointer;

  ${mediaQueries('lg', null)`
    top: 50%;
    left: 423px;
  `}
`

export interface InputProps {
  errorMes?: string
  label?: string
  placeholder: string
  value: string
  type: string
  isError?: boolean
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined
  handleShowPassword?: () => void
  textPsw?: string
  name?: string
}

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  type,
  onChange,
  errorMes,
  handleShowPassword,
  textPsw,
  name,
}) => {
  return (
    <InputContainer>
      <LabelStyle>
        <Label>{label}</Label>
        <Error isError={false}>{errorMes}</Error>
      </LabelStyle>
      <InputElement
        isError={errorMes?.length ? true : false}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        name={name}
        required
      />
      <ShowPasswordBtn
        type='button'
        showPwd={false}
        onClick={handleShowPassword}>
        {textPsw}
      </ShowPasswordBtn>
    </InputContainer>
  )
}

export default Input
