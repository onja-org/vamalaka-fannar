import { useState } from "react";
import styled from "styled-components";

import { DropDownImage } from "../DropDownImage/DropDownImage";
import { DisplayedDroppedFiles } from "../DisplayedDroppedFile/DisplayedDroppedFile.stories";
import { Loading } from "../Loading/Loading";

export interface UploadFileProps {
    image: string
    onChange: () => {}
}

export const UploadFile = ({image}) => {
    const [file, setFile] = useState('')
    const [textDescription, setTextDescription] = useState('')
    const [loading, setLoading] = useState(false)

    function getFile (e: any) {
        setFile(e.target.value)
    }

    function handleCancelClick() {
        setFile('')
    }

    function handleUploadFileClick() {
        if(file && textDescription) {
            setLoading(!loading)
            setTimeout(() => {
                setLoading(false)
            }, 1000);
            if(!loading) {setFile('')}
        }
    }

    function handleTextDescription(text: string) {       
        setTextDescription(text)
    }    

    return (
    <Container>
        {loading            
            ? <div><Loading size={60}/><p>...Proccess...</p></div> 
            : <>
            {file
                ?
                <DisplayedDroppedFiles
                    cancelClick={handleCancelClick} 
                    uploadClick={handleUploadFileClick} 
                    onChangeDescription={(e) => handleTextDescription(e.target.value)} 
                    fileName={file} 
                    textDescription={textDescription} 
                />
                :
                <DropDownImage 
                    onChange={(e: any) => getFile(e)} 
                    image={image} alt={`${file} image from computer`} 
                    name='file-upload'
                />
                        
            }
            </>
        }
    </Container>)
}

const Container = styled.div`

`