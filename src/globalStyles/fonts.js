import { css } from 'styled-components'

import FuturaStdMediumWoff2 from '../fonts/FuturaStd-Medium.woff2'
import FuturaStdMediumWoff from '../fonts/FuturaStd-Medium.woff'

export const fontFace = css`
  @font-face {
    font-family: 'Futura Std';
    src: local('Futura Std'), local('FuturaStd'),
      url(${FuturaStdMediumWoff2}) format('woff2'),
      url(${FuturaStdMediumWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
  }
`
