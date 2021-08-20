import React from 'react'
import styled from 'styled-components'
import Buttons from '../Buttons/Buttons'
import Input from '../InputName/InputName'
import { TermsAndConditions } from '../TermsAndConditions/TermsAndConditions'
import { mediaQueries } from '../../mediaQuery/mediaQueries'
import googleIcon from '../../icons/google.png'

export interface FormProps {
  errorMes: {
    username: string
    email: string
    password: string
    confirmPassword: string
  }
  icon?: string | undefined
  isError?: boolean
  isChecked: boolean
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  onChangeEmail: React.ChangeEventHandler<HTMLInputElement> | undefined
  onChangePassword: React.ChangeEventHandler<HTMLInputElement> | undefined
  onChangeConfirmPassword:
    | React.ChangeEventHandler<HTMLInputElement>
    | undefined
  onChangeUsername: React.ChangeEventHandler<HTMLInputElement> | undefined
  handleCheckbox: React.ChangeEventHandler<HTMLInputElement> | undefined
}

export const RegisterForm: React.FC<FormProps> = ({
  errorMes,
  isChecked,
  onSubmit,
  onChangeEmail,
  onChangePassword,
  onChangeConfirmPassword,
  onChangeUsername,
  handleCheckbox,
  icon,
}) => {
  const [password, setPassword] = React.useState({
    inputPassword: '',
    showPassword: false,
    showConfirmPsw: false,
  })

  const [inputInfo, setInputInfo] = React.useState({
    inputValue: '',
    username: '',
  })

  const handleShowPassword = () => {
    setPassword({
      ...password,
      showPassword: !password.showPassword,
    })
  }

  const handleShowConfirmPassword = () => {
    setPassword({
      ...password,
      showConfirmPsw: !password.showConfirmPsw,
    })
  }

  const handleGoogleButton = () => {
    alert('google')
  }

  return (
    <Container
      onSubmit={onSubmit}
      method='post'
      action=''
      id='profile-info-form'>
      <Input
        type='text'
        name='username'
        placeholder='Invictus Innocent'
        label='Your full name'
        errorMes={errorMes?.username}
        value={'inputInfo.inputValue'}
        onChange={onChangeUsername}
      />
      <Input
        type='text'
        name='email'
        placeholder='Enter email adress'
        label='Email Adress'
        errorMes={errorMes?.email}
        value={inputInfo.inputValue}
        onChange={onChangeEmail}
      />
      <InputPasswordWrapper>
        <Input
          name='password'
          placeholder='Enter a password'
          label='Create password'
          type={password.showPassword ? 'text' : 'password'}
          textPsw={password.showPassword ? 'hide' : 'show'}
          errorMes={errorMes?.password}
          value={password.inputPassword}
          onChange={onChangePassword}
          handleShowPassword={handleShowPassword}
        />
      </InputPasswordWrapper>

      <InputPasswordWrapper>
        <Input
          placeholder='Confirm your password'
          label='Confirm a password'
          name='confirmPassword'
          type={password.showConfirmPsw ? 'text' : 'password'}
          textPsw={password.showConfirmPsw ? 'hide' : 'show'}
          value={password.inputPassword}
          errorMes={errorMes?.confirmPassword}
          onChange={onChangeConfirmPassword}
          handleShowPassword={handleShowConfirmPassword}
        />
      </InputPasswordWrapper>

      <TermsAndConditions
        isChecked={isChecked}
        href='/'
        serviceTerms='terms and conditions'
        termsLabel='I agree to the'
        onChange={handleCheckbox}
      />
      <Wrapper>
        <div>
          <Buttons
            type='submit'
            label='Register Account'
            disabled={false}
            isPrimary={true}
            icon={icon}
          />
        </div>

        <Buttons
          type='button'
          label='Register with Google'
          isPrimary={false}
          icon={googleIcon}
          disabled={false}
          onClick={handleGoogleButton}
        />
      </Wrapper>
    </Container>
  )
}

const Container = styled.form`
  line-height: 50px;
`
const Wrapper = styled.div`
  margin-block-start: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    margin-block-start: 5px;
    margin-block-end: 10px;

    ${mediaQueries('lg', null)`
    margin-inline-end: 20px;
    margin-block-end: 0;
    `}
  }

  ${mediaQueries('lg', null)`
  display: flex;
  flex-direction: row;
  align-items: center;
`}
`

const InputPasswordWrapper = styled.div`
  position: relative;
  margin-block-end: 25px;
  max-width: 548px;
`
