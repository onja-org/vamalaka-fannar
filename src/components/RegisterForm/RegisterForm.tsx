import React from 'react'
import styled from 'styled-components'
import Buttons from '../Buttons/Buttons'
import Input from '../InputName/InputName'
import { TermsAndConditions } from '../TermsAndConditions/TermsAndConditions'
import { mediaQueries } from '../../mediaQueries/mediaQueries'
import googleIcon from '../../icons/google.png'
import backIcon from './icons/backIcon.svg'

export interface ErrorType {
  errorMes?: string
}

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
  backOnclick?: () => void
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  onChangeEmail: React.ChangeEventHandler<HTMLInputElement> | undefined
  onChangePassword: React.ChangeEventHandler<HTMLInputElement> | undefined
  onChangeConfirmPassword:
    | React.ChangeEventHandler<HTMLInputElement>
    | undefined
  onChangeUsername: React.ChangeEventHandler<HTMLInputElement> | undefined
  handleCheckbox: React.ChangeEventHandler<HTMLInputElement> | undefined
}

// Hnadle Email to be used in the loggin page and the register form

export const InputEmail: React.FC<ErrorType> = ({ errorMes }) => {
  const [inputInfo, setInputInfo] = React.useState({
    inputValue: '',
    userName: '',
  })

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputInfo({
      ...inputInfo,
      inputValue: event.target.value,
    })
  }

  return (
    <Input
      type='text'
      name='email'
      placeholder='Enter email adress'
      label='Email Adress'
      errorMes={errorMes}
      value={inputInfo.inputValue}
      onChange={handleEmailChange}
    />
  )
}

// Handle Password to be used in the loggin page and the register form

export const InputPassword: React.FC<ErrorType> = ({ errorMes }) => {
  const [password, setPassword] = React.useState({
    inputPassword: '',
    showPassword: false,
  })

  const handleShowPassword = () => {
    setPassword({
      ...password,
      showPassword: !password.showPassword,
    })
  }

  const handleSetPassword: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setPassword({
      ...password,
      inputPassword: event.target.value,
    })
  }
  return (
    <InputPasswordWrapper>
      <Input
        name='password'
        placeholder='Enter a password'
        label='Create password'
        type={password.showPassword ? 'text' : 'password'}
        textPsw={password.showPassword ? 'hide' : 'show'}
        errorMes={errorMes}
        value={password.inputPassword}
        onChange={handleSetPassword}
        handleShowPassword={handleShowPassword}
      />
    </InputPasswordWrapper>
  )
}

// Register Form  to be called in the register page

export const RegisterForm: React.FC<FormProps> = ({
  backOnclick,
  errorMes,
  onSubmit,
  onChangeConfirmPassword,
  onChangeUsername,
  icon,
}) => {
  const [checked, setChecked] = React.useState<boolean>(false)
  const [showConfirmPsw, setShowConfirmPsw] = React.useState({
    inputConfirmPsw: '',
    showPassword: false,
  })

  const handleGoogleButton = () => {
    alert('google')
  }

  const handleCheckboxInput = () => {
    setChecked(!checked)
  }

  const handleShowConfirmPassword = () => {
    setShowConfirmPsw({
      ...showConfirmPsw,
      showPassword: !showConfirmPsw.showPassword,
    })
  }

  return (
    <Container
      onSubmit={onSubmit}
      method='post'
      action=''
      id='profile-info-form'>
      <Back>
        <div>
          <button onClick={backOnclick}>Back</button>
          <Info>
            <small>STEP 01/02</small>
          </Info>
        </div>
      </Back>
      <Input
        type='text'
        name='username'
        placeholder='Invictus Innocent'
        label='Your full name'
        errorMes={errorMes?.username}
        value={'inputInfo.inputValue'}
        onChange={onChangeUsername}
      />
      <InputEmail errorMes={errorMes?.email} />
      <InputPassword errorMes={errorMes?.password} />
      <Input
        placeholder='Confirm your password'
        label='Confirm a password'
        name='confirmPassword'
        type={showConfirmPsw.showPassword ? 'text' : 'password'}
        textPsw={showConfirmPsw.showPassword ? 'hide' : 'show'}
        value={showConfirmPsw.inputConfirmPsw}
        errorMes={errorMes?.confirmPassword}
        onChange={onChangeConfirmPassword}
        handleShowPassword={handleShowConfirmPassword}
      />
      <TermsAndConditions
        isChecked={checked}
        href='/'
        serviceTerms='terms and conditions'
        termsLabel='I agree to the'
        onChange={handleCheckboxInput}
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
      </Wrapper>{' '}
    </Container>
  )
}

const Container = styled.form`
  line-height: 50px;
  max-width: 426px;
  margin: auto;
  display: grid;
  padding: 16px 0 17px;

  ${mediaQueries(null, 'lmd')`
    padding-bottom: calc(34px + 12px);
  `}
`
export const Wrapper = styled.div`
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
    gap: 26px
  `}
`
const InputPasswordWrapper = styled.div`
  position: relative;
  max-width: 548px;
`

const Back = styled.div`
  position: absolute;
  top: 0;
  left: 18px;
  width: 92%;

  div {
    color: #979797;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    margin: 0;
  }

  button {
    background-color: #fff;
    border: none;
    color: #979797;
    padding-left: 16px;
    background-image: url(${backIcon});
    background-repeat: no-repeat;
    background-position: 10% 17px;
  }

  ${mediaQueries(null, 'lmd')`
    display: none;
  `}
`

const Info = styled.p`
  margin: 0;
  display: block;
  span {
    margin: 0;
    font-weight: 700;
  }
`
