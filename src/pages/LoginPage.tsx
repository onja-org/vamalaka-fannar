import { LoginForm } from '../components/LoginForm/LoginForm'
import { OnboardingContainer } from '../containers/OnboardingContainer'

export const LoginPage = () => {
  return (
    <OnboardingContainer title='Log in'>
      <LoginForm />
    </OnboardingContainer>
  )
}
