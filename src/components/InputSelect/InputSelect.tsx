import React from 'react'
import styled from 'styled-components'
import arrowUp from './Icons/arrow-up-circle.svg'

export interface SelectProps {
    label: string
    placeholder: string
    selectName: string
    options: string[]
}

export const InputSelect: React.FC<SelectProps> = ({ label, placeholder, selectName,options }) => {
    return (
        <SelectContainer>
            <div>{label}</div>
            <select name={selectName} id="">
                <option value="">{placeholder}</option>
                {options.map(opt => <option value={opt}>{opt}</option>)}           
            </select>
            <img src={arrowUp} alt="Select dropdown" /> 
        </SelectContainer>
    )
}

const SelectContainer = styled.div`
    position: relative;
    margin-bottom: 10px;
    div { margin-bottom: 10px; color: #979797; }

    select {
        width: 100%;
        padding: 12px 30px 12px 16px;
        border-radius: 6px;
        -webkit-appearance: none;
        -moz-appearance: none;
        background: #fff;
        color: #979797;
        cursor: pointer;
        box-shadow: 0px 4px 10px 3px rgb(0 0 0 / 11%);
        option { cursor: pointer; }
    }

    img {
        position: absolute;
        top: 39px;
        right: 22px;
    }
`