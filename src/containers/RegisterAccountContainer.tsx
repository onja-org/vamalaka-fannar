import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { RegisterForm } from '../components/RegisterForm/RegisterForm'
import { useAppDispatch } from '../redux/hooks'
import loadingIcon from '../icons/small-load-icon.png'
import {
  fetchUserRegister,
  userErrorRegister,
  userSelector,
  userStatusSelector,
} from '../redux/slices/userSlice'
import { SuccessFulRegistration } from '../components/SuccessfulRegistration/SuccessfulRegistration'

export const RegisterAccount = () => {
  const [checked, setChecked] = React.useState<boolean>(false)
  const [accountRegister, setAccountRegister] = React.useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    role: '',
  })

  const dispatch = useAppDispatch()
  const userError = useSelector(userErrorRegister)
  const userStatus = useSelector(userStatusSelector)
  const user = useSelector(userSelector)

  const submitRegistration = React.useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event?.preventDefault()
      dispatch(
        fetchUserRegister({
          username: event.currentTarget.username.value,
          password: event.currentTarget.password.value,
          email: event.currentTarget.email.value,
          confirmPassword: event.currentTarget.confirmPassword.value,
          role: 'seller',
        })
      )
    },
    [dispatch]
  )

  const onChangeUsername = ({ target }) => {
    setAccountRegister({
      ...accountRegister,
      username: target.value,
    })
  }

  const onChangeEmail = ({ target }) => {
    setAccountRegister({
      ...accountRegister,
      email: target.value,
    })
  }
  const onChangePassword = ({ target }) => {
    setAccountRegister({
      ...accountRegister,
      password: target.value,
    })
  }
  const onChangeConfirmPassword = ({ target }) => {
    setAccountRegister({
      ...accountRegister,
      password: target.value,
    })
  }

  const usernameErrorMessage =
    userError?.message?.toString()?.indexOf('CODE:EU2') > -1
      ? 'User name already exists'
      : ''
  const emailErrorMessage =
    userError?.message?.toString()?.indexOf('CODE:EU6') >= 0
      ? 'Email must be a valid email'
      : ''

  const passwordErrorMessage =
    userError?.message?.toString()?.indexOf('CODE:EU7') >= 0
      ? 'Password must be at least 8 characters long'
      : ''

  const confirmPasswordErrorMessage =
    userError?.message?.toString()?.indexOf('CODE:EU8') >= 0
      ? "Passwords doesn't match"
      : ''

  const errorMessages = {
    username: usernameErrorMessage,
    email: emailErrorMessage,
    password: passwordErrorMessage,
    confirmPassword: confirmPasswordErrorMessage,
  }

  return (
    <Wrapper>
      {user.username ? (
        <SuccessFulRegistration />
      ) : (
        <>
          <RegisterForm
            onSubmit={submitRegistration}
            onChangeUsername={onChangeUsername}
            onChangeEmail={onChangeEmail}
            onChangePassword={onChangePassword}
            onChangeConfirmPassword={onChangeConfirmPassword}
            handleCheckbox={() => setChecked(!checked)}
            isChecked={checked}
            errorMes={errorMessages}
            icon={userStatus === 'loading' ? loadingIcon : undefined}
          />
        </>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  & ~ div {
    bakground: black;
  }  
`
