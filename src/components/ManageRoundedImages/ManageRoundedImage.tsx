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
  onDeleteImage?: () => void
}


export const ManageRoundedImage: React.FC<ManageImageProps> = ({
  alt,
  imageSource,
  showStar,
  onClickImage: onImageClik,
  onDeleteImage,
  
}) => {
  console.log('imageSource::::::',imageSource);
  return (
    <Container>
      <Wrapper>
        <RoundedCornerImage
          onClick={onImageClik}
          imageSource={imageSource ? imageSource : emptyImage}
          alt={alt}
        />
      </Wrapper>
      {showStar && <Star src={starImage} />}
      {imageSource && <Cross onClick={onDeleteImage} src={crossImage} />}
    </Container>
  )
}

const Container = styled.div`
  position: relative;
`

const Wrapper = styled.div`
  img {
    width: 100%;
  }
`

const Star = styled.img`
  position: absolute;
  top: 0;
  max-width: 20px;
`
const Cross = styled.img`
  position: absolute;
  left: 75px;
  top: 0;
  max-width: 20px;
`
