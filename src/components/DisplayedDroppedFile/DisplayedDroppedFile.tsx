import styled from 'styled-components'
import { fonts } from '../../globalStyles/fonts'
import Button from '../Buttons/Buttons'
import { TextArea } from '../TextArea/TextArea'

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
  onChangeDescription
}) => {
  return (
  <Container>
    <Wrapper>
      <p>File name:</p>
      <FileNameStyle>{fileName}</FileNameStyle>
    </Wrapper>
    <TextArea isTall={false} label='Description' onChange={onChangeDescription} textDescription={textDescription} />
    <WrapperBtn>
      <Button type='button' label='Cancel' onClick={cancelClick} />
      <Button type='button' label='Upload' onClick={uploadClick} isPrimary={true} />
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
`

const FileNameStyle = styled.span`
margin-bottom: 20px;
`