import React from 'react'
import { FileUploader } from 'react-drag-drop-files'
import styled from 'styled-components'
import { fonts } from '../../globalStyles/fonts'
import { UploadedFiles } from '../UploadedFiles/UploadedFiles'
import dropDownSvg from './drop-image.svg'

export interface DropDownProps {
  onChange: (files: File) => void
  image: string
  alt: string
  file: string
}
const fileTypes = ["jpg", "jpeg", "png"];

export const DropDownImage: React.FC<DropDownProps> = ({ onChange, alt, file, image }) => {
  return (
    <Container>
      <Label htmlFor={file}>
        <FileUploader
          handleChange={(file) => onChange(file)} name="file" types={fileTypes}>
          <Image src={dropDownSvg} alt={alt} />
        </FileUploader>

      </Label>
      <ContentWrapper>
        <DropText>Drag and drop an image here</DropText>
        <DropText>or</DropText>
      </ContentWrapper>
      <BrowseInput>
        <Text>Browse</Text>
        <Input
          type='file'
          name={file}
          onChange={(e) => onChange(e?.target?.files?.[0] as File)}
        />
      </BrowseInput>
      <UploadedFiles image={image} alt={alt}/>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`
const Image = styled.img`
  width: 100%;
  margin-inline-start: 0;
  cursor: pointer;
`
const Label = styled.label`
position: relative;
top: 40px;

`
const BrowseInput = styled.div`
  position: relative;
  box-shadow: -3px 3px rgba(21, 140, 177, 0.3), 3px -3px rgba(252, 70, 43, 0.3); 
`;

const Text = styled.p`
  position: absolute;
  left: 20px;
  top: 10px;
  font-family: 'Garamond';
  font-size: 24px;
  line-height: 27px;
  margin: 0;
`;

const Input = styled.input.attrs({ type: 'file' })`
  overflow: hidden;
  padding: 1rem;
  width: 75px;
  opacity: 0;
  cursor: pointer;
  background: #FFFFFF;
`;

const ContentWrapper = styled.div`
  ${fonts}
  font-size: 20px;
  line-height: 24px;
  color: #979797;
`
const DropText = styled.p`
  ${fonts}
`;

