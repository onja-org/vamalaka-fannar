import { useState } from "react";
import styled from "styled-components";

import { DropDownImage } from "../DropDownImage/DropDownImage";
import { DisplayedDroppedFiles } from "../DisplayedDroppedFile/DisplayedDroppedFile.stories";
import { Loading } from "../Loading/Loading";
import { fonts } from "../../globalStyles/fonts";
import axios from "axios";
import { BACKEND_URL } from "../../localhostURL";

export interface UploadFileProps {
  image: string
  onChange: () => void
}

export const UploadFile = ({image, onChange }) => {
  const [file, setFile] = useState<File | null>()
  const [textDescription, setTextDescription] = useState('')
  const [loading, setLoading] = useState(false)

  function getFile(currentFile: File) {
    console.log('currentFile::::::', currentFile);
    setFile(currentFile)
  }

  function handleCancelClick() {
    setFile(null)
  }

  const handleUploadFileClick = async () => {
    if (file && textDescription) {
      setLoading(true)
      const formData = new FormData()
      const URL = `${BACKEND_URL}/upload`;
      console.log('file::::::', file);

      formData.append('avatar', file)
      const response = await axios.post(URL, formData);
      console.log('response::::::', response);

      setLoading(false)

      setFile(null)

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
          {Boolean(file)
            ?
            <DisplayedDroppedFiles
              cancelClick={handleCancelClick}
              uploadClick={handleUploadFileClick}
              onChangeDescription={(e: any) => handleTextDescription(e)}
              fileName={file?.name || ''}
              textDescription={textDescription}
            />
            :
            <DropDownImage
              onChange={(e: any) => getFile(e)}
              image={image} alt={`${file} image from computer`}
              file='file-uploads'
              onImageClick={() => console.log("clicked image")}
              onImageDelete={() => console.log('image deleted')}
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
