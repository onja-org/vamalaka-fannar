import styled from "styled-components"


interface UploadedFileProps {
    image: string
    alt: string
}

export const UploadedFiles:React.FC<UploadedFileProps> = ({image, alt} ) => {
    return (
        <ImageContainer>
            <img src={image} alt={alt} />
        </ImageContainer>
    )
}

const ImageContainer = styled.div`
  background-color: #FF5733 ;
  margin-top: 2rem;
  width: 300px;
  height: 300px;
`;