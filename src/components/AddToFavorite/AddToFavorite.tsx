import React, { FC } from 'react'
import Button from '../Buttons/Buttons'

export interface PropType {
  name: string
}

const AddToFavorite: FC<PropType> = ({ name }) => {
  return (
    <Button isPrimary={false} label={`Add ${name} to favorite`} type='button' />
  )
}

export default AddToFavorite
