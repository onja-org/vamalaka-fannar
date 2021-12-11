// import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import styled, {css} from 'styled-components'
import { fonts } from '../../globalStyles/fonts'
import { Paths } from '../../paths'

export interface WidgetsProps {
  src?: string;
  alt?: string;
  offersNumber?: number;
  logOutLabel?: string;
  offersLabel?: string;
  profileName?: string;
}

const Widget: React.FC<WidgetsProps> = ({
  src, 
  alt, 
  offersNumber, 
  offersLabel, 
  logOutLabel,
  profileName,
}) => {
  return (
    <WidgetWrapper>
      <Link to={`${Paths.PROFILE}`}>
        <ProfileImage src={src} alt={alt} />
        <ProfileName>{profileName}</ProfileName>
      </Link>
      <Link to={`${Paths.PROFILE}`}>
        <Offers>{offersLabel} <OfferNumber>{offersNumber}</OfferNumber></Offers>
      </Link>
      <LogOutButton>{logOutLabel}</LogOutButton>
    </WidgetWrapper>
  )
}

const fontStyles = css `
  font-style: normal;
  font-weight: normal;
`;

const marginStyle = css `
  margin-block-end: 0;
  margin-block-start: 0;
`;

const WidgetWrapper = styled.article`
  text-align: center;
  width: 172px; 
  background-color: #FFF5F1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
  padding-block-start: 21px;
  padding-block-end: 21px;

  a {
    ${fonts}
    font-family: 'Futura Std', Arial, Helvetica, sans-serif;
    font-size: 1.6rem;
    line-height: 30px;
    color: #041d42;
    text-decoration: none;
    display: flex;
    border: none;
    background-color: transparent;
    align-items: center;
    display: block;
  }
`
const ProfileImage = styled.img `
  width: 100%;
  max-width: 72px;
`;
const ProfileName = styled.p `
  ${marginStyle}
  color: #0E54BB;
`;
const Offers = styled.p `
  ${marginStyle}
  padding-block-start: 10px;
  padding-block-end: 30px;
`;
const OfferNumber = styled.strong `
  ${fontStyles}
  font-size: 14px;
  line-height: 17px;
  background-color: #E9B633;
  border-radius: 6px;
  padding-inline-end: 6px;
  padding-inline-start: 6px;
  padding-block-end: 3px;
  padding-block-start: 6px;
`;
const LogOutButton = styled.button `
  ${fontStyles}
  font-size: 25px;
  background-color: unset;
  border: none;
  line-height: 30px;
  color: #041D42;
`;

export default Widget