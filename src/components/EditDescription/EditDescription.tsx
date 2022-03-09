import React, { FC } from 'react'
import Styled from 'styled-components'
import { fonts } from '../../globalStyles/fonts'

const EditDescriptionProp = Styled.div`
${fonts}
  display : flex;
  flex-direction : column; 
  label {
    color: #979797;
    padding-bottom : 10px;
    font-size : 16px;
    font-family :'Futura Std', Arial, Helvetica, sans-serif;
    text-align : start
  } 
  textarea {
    font-family :'Futura Std', Arial, Helvetica, sans-serif;
    max-width: 425px;
    width : 100%;
    height: 168px;
    padding-left: 28px;
    padding-right: 30px; 
    padding-top : 14px;
    font-size : 14px;
    resize: none;
    border: 1px solid #979797;
    box-sizing: border-box;
    border-radius: 6px;
    outline : none;
    color: #000000;
    

}
`
export interface EditDescriptionProp {
  textdescription: string
  label: string
  onChange: (e: any) => void
}

export const EditDescription: FC<EditDescriptionProp> = ({
  textdescription,
  label,
  onChange
}) => {
  return (
    <EditDescriptionProp>
      <label htmlFor='description'>{label}</label>
      <textarea id='description' value={textdescription} name='description' onChange={onChange}>
        {textdescription}
      </textarea>
    </EditDescriptionProp>
  )
}
