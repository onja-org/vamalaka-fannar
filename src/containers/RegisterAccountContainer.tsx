import { RegisterForm } from '../components/RegisterForm/RegisterForm'
import { OnboardingContainer } from './OnboardingContainer'

export const RegisterAccountContainer = () => {
  return (
    <OnboardingContainer title='Register Account'>
      <RegisterForm onSubmit={() => console.log('Nothing')} />
    </OnboardingContainer>
  )
}
