import { FC } from 'react'
import styled from 'styled-components'
import { fonts } from '../../globalStyles/fonts'
import { mediaQueries } from '../../mediaQueries/mediaQueries'

export interface InputType {
  placeholderText: string
  icon?: string
  alt: string
}

const Input: FC<InputType> = ({ placeholderText, alt, icon }) => {
  return (
    <Label>
      <img src={icon} alt={alt} />
      <input type='text' placeholder={placeholderText} />
    </Label>
  )
}

export default Input

const Label = styled.label`
  padding-bottom: 4px;
  border-bottom: 1px solid #041d42;
  display: flex;
  max-width: 80%;
  position: relative;
  gap: 12px;

  ${mediaQueries('xl', null)`
    width: 250px;
    margin: auto;
  `}

  input {
    ${fonts}
    font-family: 'Futura Std', Arial, Helvetica, sans-serif;
    width: 75%;
    font-size: 18px;
    line-height: 22px;
    color: #979797;
    background: transparent;
    border: none;
    &:focus {
      border: none;
      outline: none;
    }
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
  }

  ${mediaQueries(null, 'xL')`
    display: none;
  `}
`
