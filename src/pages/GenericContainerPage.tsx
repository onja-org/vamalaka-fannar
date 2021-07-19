import { FC } from 'react'
import styled from 'styled-components'
import { loggedIn } from '../components/HeaderNavLink/HeaderNavLink'
import { Header } from '../components/Header'
import { maxWidthMedia } from '../containers/RoleSelectionContainer'
import { PageFooter } from '../components/PageFooter/PageFooter'

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
  return (
    <Container>
      <TopContainerStyles>
        <HeaderContainer>
          <Header item={loggedIn} />
        </HeaderContainer>
        <MainContainer>{children}</MainContainer>
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
  @media (max-width: ${maxWidthMedia}) {
    footer > div > * {
      display: none;
    }

    footer > div {
      padding: 0;
      min-height: 184px;
    }
  }
`

const HeaderContainer = styled.div`
  padding: 10px 16px 11px 10px;
`

const TopContainerStyles = styled.div`
  background: linear-gradient(
    180deg,
    #fff5f1 0%,
    #feeae3 45.27%,
    #ffdbcc 94.31%
  );
  width: 100%;
  min-height: calc(318px + 164px + 205px - 54px);
  @media (max-width: ${maxWidthMedia}) {
    min-height: 480px;
  }

  @media (max-width: 420px) {
    min-height: 544px;
  }

  @media (max-width: 360px) {
    min-height: 644px;
  }
`

const MainContainer = styled.div`
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  width: 90%;
  padding: 47px 14px 14px 16px;
  display: flex;
  justify-content: center;
  @media (max-width: 920px) {
    & > div:nth-child(1) {
      display: none;
    }
  }
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