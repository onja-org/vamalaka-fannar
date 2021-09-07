import React from 'react'
import styled from 'styled-components'
import { DisplayDiscover } from '../components/Discover/DisplayDiscover'
import { LearnMore } from '../components/IntroContent/LearnMoreContent'
import { PageFooter } from '../components/PageFooter/PageFooter'
import { SellerDisplay } from '../components/SellerDisplay/SellerDisplay'
import { SubtitleInfo } from '../components/SubtitleInfo/SubtitleInfo'
import { mediaQueries } from '../mediaQueries/mediaQueries'
import { footerLinks } from './GenericContainerPage'

export const HowItWorksPage = () => {
  return (
    <Wrapper>
      <LearnMore />
      <GapWrapper>
        <DisplayDiscover />
      </GapWrapper>
      <SellerDisplay />
      <SubtitleInfo />
      <FooterWrapper>
        <PageFooter footerLinks={footerLinks} />
      </FooterWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  ${mediaQueries('xL', null)`
  & > * {
    margin: auto;
    max-width: 1200px;
    padding-block-start: 80px;
    padding-block-end: 100px;
    padding-inline-start: 0;
    padding-inline-end: 0;
  }
 `}

  footer > div > * {
    display: block;
  }
`

const GapWrapper = styled.div`
  padding-block-start: 150px;
  padding-block-end: 311px;
`

const FooterWrapper = styled.div`
  display: block;
  ${mediaQueries('lmd', null)`
  display: none;
`}

  ${mediaQueries('xL', null)`
  padding-top: 50px;
`}
`
