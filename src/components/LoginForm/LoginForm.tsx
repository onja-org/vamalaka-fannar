import { FC } from 'react'
import Button from '../Buttons/Buttons'
import googleIcon from '../../icons/google.png'

import {
  ErrorType,
  InputEmail,
  InputPassword,
  Wrapper,
} from '../RegisterForm/RegisterForm'
import styled from 'styled-components'
import { mediaQueries } from '../../mediaQueries/mediaQueries'

export const LoginForm: FC<ErrorType> = ({ errorMes }) => {
  return (
    <Login>
      <div>
        <div>
          <InputEmail errorMes={errorMes} />
          <InputPassword />
        </div>
        <Wrapper>
          <div>
            <Button
              type='submit'
              label='Login'
              disabled={false}
              isPrimary={true}
              onClick={() => {}}
            />
          </div>

          <Button
            type='button'
            label='Login with Google'
            isPrimary={false}
            icon={googleIcon}
            disabled={false}
            onClick={() => alert('Google')}
          />
        </Wrapper>{' '}
      </div>
    </Login>
  )
}

const Login = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;

  & > div {
    display: grid;
    gap: 122px;
    padding: 32px 0;
  }

  ${mediaQueries(null, 'md')`
    gap: 122px;
  `}
`
