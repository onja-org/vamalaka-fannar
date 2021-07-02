import styled from "styled-components"

const maxWidthMedia = '920px'

export const TopContainerStyles = styled.div`
  background: linear-gradient(180deg, #FFF5F1 0%, #FEEAE3 45.27%, #FFDBCC 94.31%);
  width: 100%;
  min-height: calc(318px + 164px + 59px);
  @media (max-width: ${maxWidthMedia}) {
    min-height: 444px;
  }

  @media (max-width: 420px) {
    min-height: 544px;
  }

  @media (max-width: 360px) {
    min-height: 644px;
  }
`

export const MainContainer = styled.div`
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

export const RoleOptionContainer = styled.div`
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

export const Container = styled.div`
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

export const AccountContainer = styled.div`
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

export const HeaderContainer = styled.div`
  padding: 10px 16px 11px 10px;
`
export const ImageContainer = styled.div`
  background-color: #041D42;
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

export const JoinUsHeader = styled.h3`
  font-family: Futura Std;
  font-style: normal;
  font-weight: 650;
  font-size: 30px;
  line-height: 36px;
  align-items: center;
  color: #041D42;
  margin: calc(27px - 14px) 0 4px 0;
`
export const FooterContainer = styled.div`
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