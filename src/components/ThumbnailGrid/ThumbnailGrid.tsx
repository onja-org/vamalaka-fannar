import React from "react"
import { ManageImageProps, ManageRoundedImage } from "../ManageRoundedImages/ManageRoundedImage"

interface ThumbnailGridProps {
    thumbs: Omit<ManageImageProps, "onClickImage" | "onDeleteImage">[]
    onClickImage: (imageName: string) => void
    onDeleteImage: (imageName: string) => void

}

export const ThumbnailGrid = ({ thumbs, onClickImage, onDeleteImage }: ThumbnailGridProps) => {



    return (
        <ul>
            {thumbs.map(thumb =>
                <li>
                    <ManageRoundedImage imageSource={thumb.imageSource}
                        alt={thumb.alt} onClickImage={() => onClickImage(thumb.imageSource || "")} showStar={thumb.showStar} onDeleteImage={() => onDeleteImage(thumb.imageSource || " ")} />
                </li>
            )}

        </ul>
    )
}