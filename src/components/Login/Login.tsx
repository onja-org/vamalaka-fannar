import React from 'react'

import styled from 'styled-components'
import FuturaStdMediumWoff from '../../fonts/FuturaStd-Medium.woff'
import FuturaStdMediumWoff2 from '../../fonts/FuturaStd-Medium.woff2'

export interface LoginProps {
  isSignedUp: boolean
  href: string
}

export const Login: React.FC<LoginProps> = ({ isSignedUp, href }) => {
  const loginEscapeTexts = isSignedUp
    ? 'Already have an account?'
    : 'Not a user yet?'

  const signUpOrSignInTexts = isSignedUp ? 'Sign In' : 'Sign Up'

  return (
    <LoginContainer>
      <p>
        {loginEscapeTexts}
        <a href={href}>{signUpOrSignInTexts}</a>
      </p>
    </LoginContainer>
  )
}

const LoginContainer = styled.div`
  @font-face {
    font-family: 'Futura Std';
    src: local('Futura Std'), local(' Futura Std'),
      url(${FuturaStdMediumWoff2}) format('woff2'),
      url(${FuturaStdMediumWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
  }

  p {
    font-family: 'Futura Std';
    margin: 0;
    font-size: 18px;
    line-height: 28px;
    color: #979797;
    a {
      font-family: 'Futura Std';
      color: #041d42;
      text-decoration: underline;
      padding-left: 5px;
    }
  }
`
