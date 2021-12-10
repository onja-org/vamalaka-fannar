import { FC } from 'react'
import styled from 'styled-components'
import { loggedIn, login } from '../components/HeaderNavLink/HeaderNavLink'
import { Header } from '../components/Header'
import { PageFooter } from '../components/PageFooter/PageFooter'
import { mediaQueries } from '../mediaQueries/mediaQueries'
import { useSelector } from 'react-redux'
import { userStatusSelector } from '../redux/slices/userSlice'
import { STATUS } from '../enums/enums'

export const footerLinks = [
  {
    summary: 'Madamada',
    links: [
      { linkContent: 'about', linkUrl: '#about' },
      { linkContent: 'careers', linkUrl: '#careers' },
      { linkContent: 'pricing', linkUrl: '#pricing' },
      { linkContent: 'FAQ', linkUrl: '#faq' },
    ],
    id: '1',
  },
  {
    summary: 'Madamada',
    links: [
      { linkContent: 'about', linkUrl: '#about' },
      { linkContent: 'careers', linkUrl: '#careers' },
      { linkContent: 'pricing', linkUrl: '#pricing' },
      { linkContent: 'FAQ', linkUrl: '#faq' },
    ],
    id: '2',
  },
  {
    summary: 'Madamada',
    links: [
      { linkContent: 'about', linkUrl: '#about' },
      { linkContent: 'careers', linkUrl: '#careers' },
      { linkContent: 'pricing', linkUrl: '#pricing' },
      { linkContent: 'FAQ', linkUrl: '#faq' },
    ],
    id: '3',
  },
  {
    summary: 'Madamada',
    links: [
      { linkContent: 'about', linkUrl: '#about' },
      { linkContent: 'careers', linkUrl: '#careers' },
      { linkContent: 'pricing', linkUrl: '#pricing' },
      { linkContent: 'FAQ', linkUrl: '#faq' },
    ],
    id: '4',
  },
  {
    summary: 'Madamada',
    links: [
      { linkContent: 'about', linkUrl: '#about' },
      { linkContent: 'careers', linkUrl: '#careers' },
      { linkContent: 'pricing', linkUrl: '#pricing' },
      { linkContent: 'FAQ', linkUrl: '#faq' },
    ],
    id: '5',
  },
]

const GenericContainerPage: FC = ({ children }) => {
  const userStatus = useSelector(userStatusSelector)

  return (
    <Container>
      <TopContainerStyles>
        <HeaderContainer>
          <Header item={userStatus === STATUS.Idle ? loggedIn : login} />
        </HeaderContainer>
        <Main>{children}</Main>
      </TopContainerStyles>
      <FooterContainer>
        <PageFooter footerLinks={footerLinks} />
      </FooterContainer>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  footer > div {
    margin-top: 0;
    padding-top: 220px;
  }
  ${mediaQueries(null, 'lmd')`
    footer > div > * {
      display: none;
    }

    footer > div {
      padding-bottom: 0;
      min-height: 184px;
    }
  `}
`

const Main = styled.div`
  padding: 32px 16px;
`

const HeaderContainer = styled.div`
  padding: 10px 16px 11px 10px;
  `
  
  const TopContainerStyles = styled.div`
  position: relative;
  background: linear-gradient(
    180deg,
    #fff5f1 0%,
    #feeae3 45.27%,
    #ffdbcc 94.31%
  );
  width: 100%;
  min-height: calc(318px + 164px + 205px - 54px);

  ${mediaQueries(null, 'md')`
    min-height: 644px;
  `}

  ${mediaQueries('xL', null)`
  
  }
    
 `}
`

const FooterContainer = styled.div`
  footer > div {
    max-width: 90%;
    margin: auto;
  }

  @media (min-width: calc(583px * 2 + 60px)) {
    footer > div {
      max-width: calc(563px * 2);
      margin: auto;
    }
  }
`

export default GenericContainerPage
