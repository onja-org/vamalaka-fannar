import React from 'react'

import styled from 'styled-components'
import { fonts } from '../../globalStyles/fonts'

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
  p {
    ${fonts}
    font-family: 'Futura Std', Arial, Helvetica, sans-serif;
    margin: 0;
    font-size: 18px;
    line-height: 28px;
    color: #979797;
    a {
      ${fonts}
      font-family: 'Futura Std', Arial, Helvetica, sans-serif;
      color: #041d42;
      text-decoration: underline;
      padding-left: 5px;
    }
  }
`
