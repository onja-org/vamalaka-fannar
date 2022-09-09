import styled from 'styled-components'
import React from 'react'
import { RoundedCornerImage } from '../RoundedCornerImage/RoundedCornerImage'
import crossImage from '../../images/x-circle.svg'
import starImage from '../../images/star.svg'
import emptyImage from '../../images/empty-image.svg'



export interface ManageImageProps {
  imageSource: string | undefined

  alt: string
  showStar?: boolean
  onClickImage: () => void
  onDeleteImage: (src: string) => void
  
}


export const ManageRoundedImage: React.FC<ManageImageProps> = ({
  alt,
  imageSource,
  showStar,
  onClickImage: onImageClik,
  onDeleteImage,

  
}) => {


const imgUrl = imageSource || emptyImage


  return (
    <>
    <Container>
      <Wrapper>
        <RoundedCornerImage
          onClick={onImageClik}
          imageSource={ imgUrl}
          alt={alt}
        />
      </Wrapper> 
      {showStar && <Star src={starImage} />}
      {imageSource && <Cross onClick={() => onDeleteImage(imgUrl)} src={crossImage} />}
     
    </Container>
    </>
  )
}

const Container = styled.div`
  position: relative;
`

const Wrapper = styled.div`
  img {
    width: 75px;
    height: 75px;
  }
`

const Star = styled.img`
  position: absolute;
  top: 15px;
  left: -7px;
  max-width: 20px;
`
const Cross = styled.img`
  position: absolute;
  left: 60px;
  top: 16px;
  max-width: 20px;
`
