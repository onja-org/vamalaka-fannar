import { css } from 'styled-components'

import FuturaStdNormalWoff from '../fonts/futura-std-medium.woff'
import FuturaStdNormalWoff2 from '../fonts/futura-std-medium.woff2'

export const fonts = css`
  @font-face {
    font-family: 'Futura Std';
    src: local('Futura Std'), local('FuturaStd'),
      url(${FuturaStdNormalWoff2}) format('woff2'),
      url(${FuturaStdNormalWoff}) format('woff');
  }
`
