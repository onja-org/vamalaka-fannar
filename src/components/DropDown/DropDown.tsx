import React from 'react'
import styled from 'styled-components'
import { fonts } from '../../globalStyles/fonts'
import CircleDropDown from '../../assets/arrowCircle.svg'
import { useState } from 'react'

export interface SelectProps {
  placeholder: string
  options: DropdwonOption[]
  name: string
  id: string
  label: string
  primary?: boolean
  onChange?: React.ChangeEventHandler<HTMLSelectElement>
  value?: string

}
export interface DropdwonOption {
  value: string
  label: string
}

const SelectWrapper = styled.div``
const SelectLabel = styled.p`
  ${fonts}
  font-family: 'Futura Std', Arial, Helvetica, sans-serif;
  margin: 0;
  padding-bottom: 8px;
  color: #979797;
  font-size: 16px;
  text-align: start;
`
const SelectStyle = styled.select<{ primary?: boolean }>`
  ${fonts}
  font-family: 'Futura Std', Arial, Helvetica, sans-serif;
  max-width: 426px;
  width: 100%;
  height: 50px;
  border: '1px solid #979797';
  background-color: white;
  border-radius: 6px;
  outline: none;
  padding-left: 30px;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url(${CircleDropDown});
  background-repeat: no-repeat;
  background-position-x: 96%;
  background-position-y: center;
  text-transform: uppercase;
  color: ${(props) => (props.primary ? '#979797' : 'black')};
`
const EmptyOption = styled.option`
  color: #979797;
`
const Option = styled.option`
  color: #000000;
`
export const DropDown: React.FC<SelectProps> = ({
  options,
  name,
  label,
  placeholder,
  onChange,
  value

}) => {
  const [selectedOption, setSelectedOption] = useState<any>('')
  const isFirstSelected = selectedOption === ''

  function handleChange(e) {
    setSelectedOption(e.target.value)
    onChange && onChange(e)
  }

  return (
    <SelectWrapper>
      <SelectLabel>{label}</SelectLabel>
      <SelectStyle
        name={name}
        primary={isFirstSelected}
        onChange={handleChange}
        value={value || selectedOption}
      >
        <EmptyOption value={placeholder}>
          {placeholder}
        </EmptyOption>
        {options.map((el) => {
          return (
            <Option key={el.value} value={el.value} id={el.label}>
              {el.label}
            </Option>
          )
        })}
      </SelectStyle>
    </SelectWrapper>
  )
}
