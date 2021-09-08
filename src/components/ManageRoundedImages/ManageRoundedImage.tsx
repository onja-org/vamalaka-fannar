import styled from 'styled-components'
import React from 'react'
import { RoundedCornerImage } from '../RoundedCornerImage/RoundedCornerImage'
import emptyImage from '../../images/empty-image.svg'
import crossImage from '../../images/x-circle.svg'
import starImage from '../../images/star.svg'

export interface ManageImageProps {
  imageSource: string | undefined
  alt: string
  showStar?: boolean
  onImageClik: () => void
  onDeleteImage?: () => void
}

export const ManageRoundedImage: React.FC<ManageImageProps> = ({
  alt,
  imageSource,
  showStar,
  onImageClik,
  onDeleteImage,
}) => {
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

const Container = styled.div``

const Wrapper = styled.div`
  position: relative;
  img {
    width: 100%;
  }
`

const Star = styled.img`
  position: absolute;
  top: 15px;
  max-width: 20px;
`
const Cross = styled.img`
  position: absolute;
  left: 93px;
  top: 15px;
  max-width: 20px;
`
