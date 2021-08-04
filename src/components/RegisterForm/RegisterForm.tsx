import React from 'react'
import styled from 'styled-components'
import Buttons from '../Buttons/Buttons'
import Input from '../InputName/InputName'
import { TermsAndConditions } from '../TermsAndConditions/TermsAndConditions'
import { mediaQueries } from '../../mediaQuery/mediaQueries'
import googleIcon from '../../icons/google.png'

export interface FormProps {
  errorMes: string
  icon?: string
  isError: boolean
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export const RegisterForm: React.FC<FormProps> = ({ errorMes, onSubmit }) => {
  const [checked, setChecked] = React.useState<boolean>(false)
  const [password, setPassword] = React.useState({
    text: 'show',
    inputPassword: '',
    showPassword: false,
  })

  const [inputInfo, setInputInfo] = React.useState({
    inputValue: '',
    userName: '',
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
      text: 'hide',
    })
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputInfo({
      ...inputInfo,
      inputValue: event.target.value,
    })
  }

  const handleGoogleButton = () => {
    alert('google')
  }

  const handleCheckboxInput = () => {
    setChecked(!checked)
  }

  return (
    <Container
      onSubmit={onSubmit}
      method='post'
      action=''
      id='profile-info-form'>
      <Input
        type='text'
        placeholder='Invictus Innocent'
        label='Your full name'
        value={inputInfo.userName}
        onChange={() => {}}
      />
      <Input
        type='text'
        placeholder='Enter email adress'
        label={'Email Adress'}
        errorMes={errorMes}
        value={inputInfo.inputValue}
        onChange={handleEmailChange}
      />
      <InputPasswordWrapper>
        <Input
          type={password.showPassword ? 'text' : 'password'}
          onChange={() => handleSetPassword}
          value={password.inputPassword}
          placeholder='Enter a password'
          label='Create password'
        />
        <ShowPasswordBtn type='button' onClick={handleShowPassword}>
          {password.text}
        </ShowPasswordBtn>
      </InputPasswordWrapper>
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

const ShowPasswordBtn = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  top: 55%;
  right: 10px;
  cursor: pointer;

  ${mediaQueries('lg', null)`
    top: 55%;
    right: 50px;
  `}
`
