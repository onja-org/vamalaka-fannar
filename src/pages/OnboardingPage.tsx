import styled from 'styled-components'
import { DescriptionOffer } from '../components/DescriptionOffer/descriptionOffer'
import { Option } from '../components/RoleSelectOption/RoleSelectOption'
import { Login } from '../components/Login/Login'
import { OnboardingContainer } from '../containers/OnboardingContainer'
import { Fragment, useState } from 'react'
import { mediaQueries } from '../mediaQueries/mediaQueries'
import { RegisterAccount } from '../containers/RegisterAccountContainer'
import { useSelector } from 'react-redux'
import { userSelector } from '../redux/slices/userSlice'

export const OnboardingPage = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState<boolean>(false)
  const handleRoleButton = (e) => {
    setIsRegisterOpen(true)
  }

  const user = useSelector(userSelector)

  const success = user.username
    ? 'Registration successful'
    : 'Register Your Account'

  return (
    <OnboardingContainer
      title={isRegisterOpen === false ? 'Join us' : `${success}`}>
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
                value='Buyer'
              />
            </div>
            <div>
              <Option
                onClick={handleRoleButton}
                label='Seller'
                text='Own or belong to a company, this is for you.'
                value='Seller'
              />
            </div>
          </ButtonWrapper>
          <AccountContainer>
            <Login isSignedUp={true} />
          </AccountContainer>
        </Fragment>
      ) : (
        <RegisterAccount />
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
  padding: 36px 0;
  display: grid;
  gap: 28px;
`
