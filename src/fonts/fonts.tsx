import { css } from 'styled-components'

import FuturaStd400Woff2 from '../fonts/futura-std-light.woff2'
import FuturaStd650Woff2 from '../fonts/futura-std-heavy.woff2'
import FuturaStd650Woff from '../fonts/futura-std-heavy.woff'
import FuturaStd400Woff from '../fonts/futura-std-light.woff'

export const FuturaRegular = css`
  @font-face {
    font-family: 'Futura Std';
    font-style: normal;
    font-weight: 400;
    src: local('Futura Std'), local('FuturaStd'),
      url(${FuturaStd400Woff2}) format ('woff2'),
      url(${FuturaStd400Woff}) format ('woff');
  }
`

export const FuturaHeavy = css`
  @font-face {
    font-family: 'Futura Std';
    font-style: normal;
    font-weight: 650;
    src: local('Futura Std'), local('FuturaStd'),
      url(${FuturaStd650Woff2}) format ('woff2'),
      url(${FuturaStd650Woff}) format ('woff');
  }
`
