import React from 'react'
import { ManageRoundedImage } from '../ManageRoundedImages/ManageRoundedImage'
import emptyImage from '../../images/empty-image.svg'
import imageWithStar from '../../images/image-with-star.svg'
import imageNoStar from '../../images/round-no-star.svg'
import styled from 'styled-components'

export interface GridImageProps {}

export const GridManageImages: React.FC<GridImageProps> = () => {
  return (
    <Wrapper>
      <ManageRoundedImage
        imageSource={imageWithStar}
        showStar={true}
        alt='start image'
        onClickImage={() => {}}
        onDeleteImage={() => {}}
      />
      <ManageRoundedImage
        imageSource={imageNoStar}
        showStar={false}
        alt='start image'
        onClickImage={() => {}}
        onDeleteImage={() => {}}
      />
      <ManageRoundedImage
        imageSource={imageNoStar}
        showStar={false}
        alt='start image'
        onClickImage={() => {}}
        onDeleteImage={() => {}}
      />
      <ManageRoundedImage
        imageSource={''}
        alt='start image'
        showStar={false}
        onClickImage={() => {}}
        onDeleteImage={() => {}}
      />
      <ManageRoundedImage
        imageSource={''}
        alt='start image'
        showStar={false}
        onClickImage={() => {}}
        onDeleteImage={() => {}}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`
