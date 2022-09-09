import { useState } from "react";
import styled from "styled-components";

import { DropDownImage } from "../DropDownImage/DropDownImage";
import { DisplayedDroppedFiles } from "../DisplayedDroppedFile/DisplayedDroppedFile.stories";
import { Loading } from "../Loading/Loading";
import { fonts } from "../../globalStyles/fonts";
import axios from "axios";
import { BACKEND_URL } from "../../localhostURL";
import { ManageImageProps } from "../ManageRoundedImages/ManageRoundedImage";
import { LimiteThumbnail } from "../LimiteThumbnail/LimiteThumbnail";
import React from "react";


export interface UploadFileProps {
  onUploadSuccess: (filename: string, description: string) => void;
  text: string
  thumbs: Omit<ManageImageProps, "onClickImage" | "onDeleteImage">[]
  
}



export const UploadFile = ({ onUploadSuccess, thumbs, text}) => { 

  
  const filteredEmptyImages = thumbs.filter(img => img.imageSource !== '')

  const [file, setFile] = useState<File | null>()
  const [textDescription, setTextDescription] = useState('')
  const [loading, setLoading] = useState(false)

  function handleChange(currentFile: File) {
    setFile(currentFile)
  }

  function handleCancelClick() {
    setFile(null)
  }

  const handleUploadFileClick = async () => {
    if (file && textDescription) {
      setLoading(true)
      const formData = new FormData()
      formData.append('avatar', file)
      const URL = `${BACKEND_URL}/upload`;
      const response = await axios.post(URL, formData);

      setLoading(false)

      setFile(null)
      onUploadSuccess(response.data.filenames[0], textDescription)

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
         
            :  filteredEmptyImages.length >= 6 
            ? <LimiteThumbnail text={'Maximum number of 6 images reached.Please remove existing one to upload new'}/> 
            :
            <DropDownImage
              onChange={(e: any) => handleChange(e)}
              alt={''}
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
// function img(img: any, arg1: (string: any) => void) {
//   throw new Error("Function not implemented.");
// }

