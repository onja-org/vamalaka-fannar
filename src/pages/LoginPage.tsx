import { useDispatch, useSelector } from 'react-redux'
import { LoginForm } from '../components/LoginForm/LoginForm'
import { OnboardingContainer } from '../containers/OnboardingContainer'
import {
  fetchUserLogin,
  userErrorLogin,
  userStatusSelector,
} from '../redux/slices/userSlice'
import loadingIcon from '../icons/small-load-icon.png'
import { useState } from 'react'

export const LoginPage = () => {
  const error = useSelector(userErrorLogin)
  const dispatch = useDispatch()
  const userStatus = useSelector(userStatusSelector)

  const [password, setPassword] = useState({
    inputPsw: '',
    isPasswordShown: false,
  })

  function handleSubmitLogin(username, password) {
    dispatch(
      fetchUserLogin({
        username,
        password,
      })
    )
  }

  const usernameErrorMessage =
    error?.message?.toString()?.indexOf('CODE:EU12') > -1
      ? 'Username is not found.'
      : ''

  const passwordErrorMessage =
    error?.message?.toString()?.indexOf('CODE:EU13') >= 0
      ? 'Password is incorrect. Try again!'
      : ''

  const errorMessages = {
    username: usernameErrorMessage,
    password: passwordErrorMessage,
  }

  function handleShowPassword() {
    setPassword({
      ...password,
      isPasswordShown: !password.isPasswordShown,
    })
  }

  return (
    <OnboardingContainer title=''>
      <LoginForm
        passwordType={password.isPasswordShown ? 'text' : 'password'}
        onSubmit={handleSubmitLogin}
        usernameErr={errorMessages?.username}
        textPsw={password.isPasswordShown ? 'hide' : 'show'}
        handleShowPassword={handleShowPassword}
        passwordErr={errorMessages.password}
        icon={userStatus === 'loading' ? loadingIcon : undefined}
      />
    </OnboardingContainer>
  )
}
