import { Fragment } from 'react'
import styled from 'styled-components'
import { LeftSide } from '../components/LeftSide/LeftSide'
import { mediaQueries } from '../mediaQueries/mediaQueries'

interface TitleType {
  title: string
}

export const OnboardingContainer: React.FC<TitleType> = ({
  title,
  children,
}) => {
  return (
    <Fragment>
      <ImageContainer>
        <LeftSide backgroundImage='Baobab' />
      </ImageContainer>
      <RoleOptionContainer>
        <div>
          <div>
            <Heading>{title}</Heading>
          </div>
          {children}
        </div>
      </RoleOptionContainer>
    </Fragment>
  )
}

const ImageContainer = styled.div`
  background-color: #041d42;
  margin: 0;
  padding: 0;
  max-width: 583px;
  max-height: 601px;
  overflow: hidden;
  ${mediaQueries('lmd', null)`
    flex-basis: 50%;
  `}
  p {
    margin: 0;
  }
`
const RoleOptionContainer = styled.div`
  position: relative;
  background-color: #fff;
  max-width: 583px;
  width: 100%;
  padding: 0;

  & > div {
    max-width: 426px;
    margin: auto;
    padding: 14px;
  }
  ${mediaQueries('lmd', null)`
    flex-basis: 50%;
    padding: calc(74px - 14px * 2) 0;
  & > div {
      height: 100%;
      padding: 38px 0 0 0;
    }
  `}
`

const Heading = styled.h3`
  font-family: Futura Std;
  font-style: normal;
  font-weight: 650;
  font-size: 30px;
  line-height: 36px;
  align-items: center;
  color: #041d42;
  margin: calc(27px - 14px) 0 4px 0;
  padding-left: 16px;
`
