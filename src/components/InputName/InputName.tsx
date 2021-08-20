import React from 'react'

import styled, { css } from 'styled-components'
import { fonts } from '../../globalStyles/fonts'

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
  }
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
  padding-left: 30px;
  padding-bottom: 12px;
  padding-right: 76px;
  border: 1px solid ${(props) => (!props.isError ? '#fc462b' : '#979797')};

  &:hover,
  &:focus {
    border-color: ${(props) => (!props.isError ? '#fc462b' : '#041d42')};
    box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.11);
  }
  ${inputStyles}
`

const LabelStyle = styled.label`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #979797;
  padding-bottom: 6px;
  align-items: start;
  font-family: 'Futura Std', Arial, Helvetica, sans-serif;
  }
`

const Error = styled.div<{ isError: boolean }>`
  ${(props) =>
    !props.isError
      ? ` color: #fc462b;
          padding-inline-start: 18%;`
      : `display: none`};
`

const Label = styled.span`
  text-align: start;
`

export interface InputProps {
  errorMes?: string
  label?: string
  placeholder: string
  value: string
  type: string
  isError?: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  type,
  onChange,
  errorMes,
}) => {
  return (
    <InputContainer>
      <LabelStyle>
        <Label>{label}</Label>
        <Error isError={false}>{errorMes}</Error>
      </LabelStyle>
      <InputElement
        isError={errorMes?.length === undefined ? true : false}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        required
      />
    </InputContainer>
  )
}

export default Input
