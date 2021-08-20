import styled from 'styled-components'
import { DescriptionOffer } from '../components/DescriptionOffer/descriptionOffer'
import { Option } from '../components/RoleSelectOption/RoleSelectOption'
import userIcon from '../stories/assets/user.svg'
import briefcaseIcon from '../stories/assets/briefcase.svg'
import { Login } from '../components/Login/Login'
import { OnboardingContainer } from '../containers/OnboardingContainer'
import { Fragment, useState } from 'react'
import { RegisterForm } from '../components/RegisterForm/RegisterForm'
import { mediaQueries } from '../mediaQueries/mediaQueries'

export const OnboardingPage = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState<boolean>(false)
  const handleRoleButton = (e) => {
    setIsRegisterOpen(true)
  }

  const handleBackButton = () => {
    setIsRegisterOpen(false)
  }

  console.log('It is opening')

  return (
    <OnboardingContainer
      title={isRegisterOpen === false ? 'Join us' : 'Register Account'}>
      {isRegisterOpen === false ? (
        <Fragment>
          <DescriptionOffer
            text={
              "To begin this story, tell us what kind of account you'd be opening "
            }
          />
          <ButtonWrapper>
            <div>
              <Option
                onClick={handleRoleButton}
                label='Buyer'
                text='Personal account to manage all you activities.'
                src={userIcon}
                alt='User icon'
                value='Buyer'
              />
            </div>
            <div>
              <Option
                onClick={handleRoleButton}
                label='Seller'
                text='Own or belong to a company, this is for you.'
                src={briefcaseIcon}
                alt='Briefcase icon'
                value='Seller'
              />
            </div>
          </ButtonWrapper>
          <AccountContainer>
            <Login isSignedUp={true} />
          </AccountContainer>
        </Fragment>
      ) : (
        <RegisterForm
          onSubmit={() => alert('Submitted')}
          backOnclick={handleBackButton}
        />
      )}
    </OnboardingContainer>
  )
}

const AccountContainer = styled.div`
  color: #979797;
  p {
    padding-top: 48px;
  }

  ${mediaQueries('lmd', null)`
    p {
      position: absolute;
      margin: 0;
      top: 22px;
      right: 27px;
      padding-top: 0;
    }
  `}
`

const ButtonWrapper = styled.div`
  padding-top: 36px;
  display: grid;
  gap: 28px;
`
