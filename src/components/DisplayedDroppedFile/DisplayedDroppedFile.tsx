
import { useState } from 'react'
import styled from 'styled-components'
import { fonts } from '../../globalStyles/fonts'
import Button from '../Buttons/Buttons'
import { Input } from '../Input/Input'

export interface DisplayedDroppedFileProps {
  cancelClick: () => void,
  uploadClick: () => void,
  onChangeDescription: (e: any) => void
  fileName: string,
  textDescription: string,
  

}

export const DisplayedDroppedFile: React.FC<DisplayedDroppedFileProps> = ({
  cancelClick,
  uploadClick,
  fileName,
  textDescription,
  onChangeDescription,
  
}) => {

 

const [errorMessage, setErrorMessage] = useState('')

const handleChangeDesciption= (e) => {
    setErrorMessage("")
  onChangeDescription(e)
 }

const handleUploadClick= () => {
 if(!textDescription) {
   setErrorMessage("Please fill the description")
   return
 }
 uploadClick()
}





  return (
  <Container>
    <Wrapper>
      <p>File name:</p>
      <FileNameStyle>{fileName}</FileNameStyle>
    </Wrapper>
    <Input   
      placeholder= 'Add description of the photo'
      label= 'Description:'
      inputType= 'text'
      inputId= 'Description of the photo'
      inputValue= {textDescription}
      onChange={handleChangeDesciption}
      errorMessage={errorMessage}/>
    <WrapperBtn>
      <Button type='button' label='Cancel' onClick={cancelClick} />
      <Button type='button' label='Upload' onClick={handleUploadClick} isPrimary={true} />
    </WrapperBtn>
  </Container>)
}

const Container = styled.div`
    ${fonts}
    max-width: 426px;
    p {
        color: #979797;
    }
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    
`

const WrapperBtn = styled.div`
    display: flex;
    align-items: center;
    column-gap: 15px;
    margin-top: 20px;
    margin-bottom: 20px;
`

const FileNameStyle = styled.span`
margin-bottom: 20px;
`