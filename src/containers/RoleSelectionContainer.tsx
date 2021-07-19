import { Fragment } from 'react'
import styled from 'styled-components'
import { DescriptionOffer } from '../components/DescriptionOffer/descriptionOffer'
import { Option } from '../components/RoleSelectOption/RoleSelectOption'
import userIcon from '../stories/assets/user.svg'
import briefcaseIcon from '../stories/assets/briefcase.svg'
import { Login } from '../components/Login/Login'
import { LeftSide } from '../components/LeftSide/LeftSide'

export const maxWidthMedia = '920px'

export const RoleSelectionContainer = () => {
  return (
    <Fragment>
      <ImageContainer>
        <LeftSide backgroundImage='Baobab' />
      </ImageContainer>
      <RoleOptionContainer>
        <div>
          <JoinUsHeader>Join us</JoinUsHeader>
          <DescriptionOffer
            text={
              "To begin this story, tell us what kind of account you'd be opening "
            }
          />
          <div>
            <Option
              label='Buyer'
              text='Personal account to manage all you activities.'
              src={userIcon}
              alt='User icon'
            />
          </div>
          <div>
            <Option
              label='Seller'
              text='Own or belong to a company, this is for you.'
              src={briefcaseIcon}
              alt='Briefcase icon'
            />
          </div>
          <AccountContainer>
            <Login isSignedUp={true} href='./' />
          </AccountContainer>
        </div>
      </RoleOptionContainer>
    </Fragment>
  )
}

const RoleOptionContainer = styled.div`
  position: relative;
  background-color: #fff;
  max-width: 583px;
  & > div {
    max-width: 426px;
    margin: auto;
    padding: 14px;
    div {
      margin: 14px 0;
    }
  }

  @media (min-width: ${maxWidthMedia}) {
    flex-basis: 50%;
    padding: calc(113px - 14px * 2) 0;
  }
`

const AccountContainer = styled.div`
  color: #979797;
  @media (min-width: ${maxWidthMedia}) {
    p {
      position: absolute;
      margin: 0;
      top: 22px;
      right: 27px;
    }
  }
`

const ImageContainer = styled.div`
  background-color: #041d42;
  margin: 0;
  padding: 0;
  max-width: 583px;
  max-height: 601px;
  overflow: hidden;
  @media (min-width: ${maxWidthMedia}) {
    flex-basis: 50%;
  }
  p {
    margin: 0;
  }
`

const JoinUsHeader = styled.h3`
  font-family: Futura Std;
  font-style: normal;
  font-weight: 650;
  font-size: 30px;
  line-height: 36px;
  align-items: center;
  color: #041d42;
  margin: calc(27px - 14px) 0 4px 0;
`
