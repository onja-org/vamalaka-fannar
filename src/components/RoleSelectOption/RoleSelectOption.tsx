import React from 'react'
import styled, { css } from 'styled-components'
import { fonts } from '../../globalStyles/fonts'
import arrowRightIcon from '../../stories/assets/arrow-right.svg'
import darkPolygonBg from '../../stories/assets/dark-polygon.svg'
import whitePolygonBg from '../../stories/assets/white-polygon.svg'

export interface OptionProps {
  label: string
  text?: string
  src?: string
  alt?: string
  value: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const polygonBg = css`
  background-repeat: no-repeat;
  max-width: 426px;
  padding: 16px;
`

const optionWrapperStyles = css`
  ${fonts}
  font-family: 'Futura Std', Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10%;
  align-items: center;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 8px 28px;
`

export const Option: React.FC<OptionProps> = ({
  label,
  text,
  src,
  alt,
  value,
  onClick,
}) => {
  return (
    <RoleSelectWrapper>
      <button onClick={onClick} value={value}>
        {label === 'Buyer' ? (
          <DarkPolygon>
            <img src={src} alt={alt} />
          </DarkPolygon>
        ) : (
          <WhitePolygon>
            <img src={src} alt={alt} />
          </WhitePolygon>
        )}
        <TextWrapper>
          <h6>{label}</h6>
          <p>{text}</p>
        </TextWrapper>
      </button>
    </RoleSelectWrapper>
  )
}

const RoleSelectWrapper = styled.div`
  button {
    width: 100%;
    border: none;
    background-color: #ffffff;
    cursor: pointer;
    box-shadow: 0px 4px 14px 1px rgba(0, 0, 0, 0.04);
    ${optionWrapperStyles};

    &:hover {
      background-color: #f5f9ff;
      background-image: url(${arrowRightIcon});
      background-repeat: no-repeat;
      background-position: 95% 50%;
    }

    &:focus {
      background-color: #f5f9ff;
      border: 1px solid #041d42;
      background-image: url(${arrowRightIcon});
      background-repeat: no-repeat;
      background-position: 95% 50%;
    }
  }
`

const DarkPolygon = styled.div`
  background-image: url(${darkPolygonBg});
  ${polygonBg}
`

const WhitePolygon = styled.div`
  background-image: url(${whitePolygonBg});
  ${polygonBg}
`

const TextWrapper = styled.div`
  text-align: start;

  h6 {
    font-size: 16px;
    line-height: 19px;
    font-family: 'Futura Std';
    margin-block-start: 16px;
    margin-block-end: 0;
    color: #041d42;
  }

  p {
    max-width: 161px;
    font-size: 14px;
    line-height: 17px;
    margin-block-start: 4px;
    color: #979797;
  }

  @media (max-width: 360px) {
    text-align: center;
    margin: 0;
  }

  @media (max-width: 476px) {
    max-width: 150px;
  }
`
