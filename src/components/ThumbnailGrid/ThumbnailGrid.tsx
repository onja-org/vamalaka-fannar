import React from "react"
import styled from "styled-components"
import { BACKEND_URL } from "../../localhostURL";
import { ManageImageProps, ManageRoundedImage } from "../ManageRoundedImages/ManageRoundedImage"

interface ThumbnailGridProps {
    thumbs: Omit<ManageImageProps, "onClickImage" | "onDeleteImage">[]
    onClickImage: (imageName: string) => void
    onDeleteImage: (imageName: string) => void

}

const URL = `${BACKEND_URL}/uploads/`;


export const ThumbnailGrid = ({ thumbs, onClickImage, onDeleteImage }: ThumbnailGridProps) => {



    return (
        <Wrapper>
            {thumbs.map(thumb =>
                <ManageRoundedImage imageSource={`${URL}${thumb.imageSource}`}
                    alt={thumb.alt} onClickImage={() => onClickImage(thumb.imageSource || "")} showStar={thumb.showStar} onDeleteImage={() => onDeleteImage(thumb.imageSource || " ")} />
            )}

        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  `