import { FC } from 'react'
import styled from 'styled-components'
import vamalakaLoading from './icons/vamalaka_loading.svg'
export interface SizeType {
  size: number
}

export const IconSize = {
  xl: 164,
  md: 64,
  sm: 40,
  esm: 20,
}

export const Loading: FC<SizeType> = ({ size }) => {
  return (
    <LoadingStyle>
      <img
        style={{ maxWidth: `${size}px` }}
        src={vamalakaLoading}
        alt='Loading'
      />
    </LoadingStyle>
  )
}

const LoadingStyle = styled.div`
  img {
    width: 100%;
  }
`
