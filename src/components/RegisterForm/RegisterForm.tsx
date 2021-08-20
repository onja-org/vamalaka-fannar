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
  errorMes?: string
  icon?: string
  isError?: boolean
  backOnclick?: () => void
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export const InputPassword: React.FC = () => {
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
        type={password.showPassword ? 'text' : 'password'}
        onChange={handleSetPassword}
        value={password.inputPassword}
        placeholder='Enter a password'
        label='Create password'
      />
      <ShowPasswordBtn type='button' onClick={handleShowPassword}>
        {!password.showPassword ? 'show' : 'hide'}
      </ShowPasswordBtn>
    </InputPasswordWrapper>
  )
}

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
      placeholder='Enter email address'
      label={'Email Address'}
      errorMes={errorMes}
      value={inputInfo.inputValue}
      onChange={handleEmailChange}
    />
  )
}

export const RegisterForm: React.FC<FormProps> = ({
  errorMes,
  onSubmit,
  backOnclick,
}) => {
  const [checked, setChecked] = React.useState<boolean>(false)
  const [inputInfo, setInputInfo] = React.useState({
    inputValue: '',
    userName: '',
  })

  const handleGoogleButton = () => {
    alert('google')
  }

  const handleCheckboxInput = () => {
    setChecked(!checked)
  }

  const handleSubmit = () => {
    setInputInfo({ ...inputInfo, inputValue: 'input value' })
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
            <span>Personal Info.</span>
          </Info>
        </div>
      </Back>
      <Input
        type='text'
        placeholder='Username'
        label='Your username'
        value={inputInfo.userName}
        onChange={handleSubmit}
      />
      <InputEmail errorMes={errorMes} />
      <InputPassword />
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
            onClick={() => {}}
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
  padding: 34px 17px 0 17px;

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
  margin-block-end: 25px;
  max-width: 548px;
`

const ShowPasswordBtn = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  top: 50%;
  right: 16px;
  cursor: pointer;
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
