import React from 'react'

import styled, { css } from 'styled-components'
import FuturaStdMedium from '../../fonts/FuturaStdMedium.woff'

const inputStyles = css`
  @font-face {
    font-family: 'Futura Std';
    src: local('Futura Std'), url(${FuturaStdMedium});
    font-weight: 400;
    font-style: normal;
  }
  background: #ffffff;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: #979797;
  text-transform: capitalize;
  outline: none;
  border: 1px solid #041d42;
  border-radius: 6px;
  font-family: 'Futura Std';
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  .large {
    max-width: 320px;
    padding-top: 12px;
    padding-left: 27px;
    padding-bottom: 12px;
    padding-right: 76px;
    box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.11);
    ${inputStyles}
  }
  .small {
    max-width: 240px;
    padding-top: 12px;
    padding-left: 14px;
    padding-bottom: 12px;
    padding-right: 34px;
    box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.11);
    ${inputStyles}
  }
  .labelStyle {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    color: #979797;
    padding-bottom: 6px;
    align-items: start;
    font-family: 'Futura Std';
  }
`

export interface InputProps {
  label: string
  placeholder: string
  name: string
}

export const Input: React.FC<InputProps> = ({ label, placeholder, name }) => {
  return (
    <InputContainer>
      <label className='labelStyle'>{label}</label>
      <input placeholder={placeholder} className={name} />
    </InputContainer>
  )
}

export default Input
