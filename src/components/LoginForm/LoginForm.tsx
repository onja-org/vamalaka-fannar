import { FC, useCallback } from 'react'
import Button from '../Buttons/Buttons'
import googleIcon from '../../icons/google.png'

import { Wrapper } from '../RegisterForm/RegisterForm'
import styled from 'styled-components'
import { mediaQueries } from '../../mediaQueries/mediaQueries'
import Input from '../InputName/InputName'
import { useState } from 'react'

export interface LoginType {
  passwordType: string
  errorMes?: string | undefined
  usernameErr: string
  passwordErr: string
  onSubmit: (username: string, password: string) => void
  icon?: string
  textPsw?: string
  handleShowPassword?: () => void
}

export const LoginForm: FC<LoginType> = ({
  usernameErr,
  passwordErr,
  onSubmit,
  icon,
  textPsw,
  passwordType,
  handleShowPassword,
}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault()
      onSubmit(username, password)
    },
    [username, password, onSubmit]
  )

  return (
    <Login onSubmit={handleSubmit}>
      <div>
        <InputWrapper>
          <Input
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            errorMes={usernameErr}
          />
          <Input
            type={passwordType}
            placeholder='Password'
            handleShowPassword={handleShowPassword}
            value={password}
            textPsw={textPsw}
            onChange={(e) => setPassword(e.target.value)}
            errorMes={passwordErr}
          />
        </InputWrapper>
        <Wrapper>
          <div>
            <Button
              type='submit'
              label='Login'
              disabled={false}
              isPrimary={true}
              icon={icon}
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
    gap: 204px;
    padding: 17px 0;

    ${mediaQueries('md', null)`
      gap: 144px;
    `}
  }
`
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`
