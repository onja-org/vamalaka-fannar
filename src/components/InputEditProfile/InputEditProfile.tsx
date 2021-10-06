import { FC } from "react"
import styled from "styled-components"

export interface PropType {
    label: string
    placeholder: string
    value?: string
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
}

export const InputEditProfile: FC<PropType> = ({label, placeholder, value, onChange}) => {
    return (
        <Fieldset>
            <label>{label}</label>
            <input type="text" placeholder={placeholder} value={value} onChange={onChange} />
        </Fieldset>
    )
}

const Fieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: none;
    color: #979797;
    
    input {
        font-size: 14px;
        line-height: 17px;
        color: #979797;
        box-sizing: border-box;
        padding: 16px 0;
        padding-left: 16px;
        border: 1px solid #979797;
        border-radius: 6px;
    }
`