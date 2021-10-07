import React from 'react'
import styled from 'styled-components'
import { fonts } from '../../globalStyles/fonts'
import Button from '../Buttons/Buttons'
import dropDownSvg from './drop-image.svg'

export interface dropDownProps {
  image: string
  alt: string
}

export const DropDownImage: React.FC<dropDownProps> = ({ alt, image }) => {
  return (
    <Container>
      <Label htmlFor='file-upload'>
        <DropDownInput type='file' name='file-upload' id='file-upload' />
        <Image src={dropDownSvg} alt={alt} />
      </Label>
      <ContentWrapper>
        <p>Drag and drop an image here</p>
        <p>or</p>
      </ContentWrapper>
      <Button type='button' label='Browse' />
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
`
const Label = styled.label``

const DropDownInput = styled.input`
  visibility: hidden;
`
const ContentWrapper = styled.div`
  ${fonts}
  font-size: 20px;
  line-height: 24px;
  color: #979797;
  p {
    margin-top: 0;
  }
`
