import React from 'react'
import { RatingStyle } from './RatingStyle'
import outlinedStar from './icons/outlined-star.svg'
import fullStar from './icons/full-star.svg'

export interface RatingProps {
  src?: string
  alt: string
  star: number
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const Rating: React.FC<RatingProps> = ({ alt, star }) => {
  const fullStarsToDisplay =
    star > 0 && star < 6
      ? Array.from(Array(star).keys())
      : star < 0
      ? null
      : Array.from(Array(5).keys())
  const outlinedStarsToDisplay =
    star > 0 && star < 6
      ? Array.from(Array(5 - star).keys())
      : star < 0
      ? Array.from(Array(5).keys())
      : null

  return (
    <RatingStyle>
      {fullStarsToDisplay?.map((star) => (
        <img key={star} src={fullStar} alt={alt} />
      ))}
      {outlinedStarsToDisplay?.map((star) => (
        <img key={star} src={outlinedStar} alt={alt} />
      ))}
    </RatingStyle>
  )
}
