import { useState } from "react";
import styled from "styled-components";

import { DropDownImage } from "../DropDownImage/DropDownImage";
import { DisplayedDroppedFiles } from "../DisplayedDroppedFile/DisplayedDroppedFile.stories";
import { Loading } from "../Loading/Loading";
import { fonts } from "../../globalStyles/fonts";

export interface UploadFileProps {
  image: string
  onChange: () => void
}

export const UploadFile = ({ image }) => {
  const [file, setFile] = useState('')
  const [textDescription, setTextDescription] = useState('')
  const [loading, setLoading] = useState(false)

  function getFile(currentFile: string) {
    console.log('file list', currentFile);
    setFile(currentFile)    
  }

  function handleCancelClick() {
    setFile('')
  }

  function handleUploadFileClick() {
    if (file && textDescription) {
      setLoading(!loading)
      setTimeout(() => {
        setLoading(false)
      }, 2000);
      if (!loading) { setFile('') }
    }
  }

  function handleTextDescription(text: any) {
    setTextDescription(text.target.value)
  }

  return (
    <Container>    
        {loading
          ? 
          <LoadingStyle>
            
            <Loading size={80} />
            <LoadingTextStyle>
              still uploading your image.....
            </LoadingTextStyle>
          </LoadingStyle>
          : <>
            {file
              ?
              <DisplayedDroppedFiles
                cancelClick={handleCancelClick}
                uploadClick={handleUploadFileClick}
                onChangeDescription={(e:any) => handleTextDescription(e)}
                fileName={file}
                textDescription={textDescription}
              />
              :
              <DropDownImage
                onChange={(e: any) => getFile(e)}
                image={image} alt={`${file} image from computer`}
                file='file-uploads'
              />
            }
          </>
        }
    </Container>)
}

const Container = styled.div`
  padding-top: 160px;
`

const LoadingStyle = styled.div`
  text-align: center;
`;

const LoadingTextStyle = styled.p`
  ${fonts}
  font-size: 20px;
  color: rgb(0, 150, 255);
`;
