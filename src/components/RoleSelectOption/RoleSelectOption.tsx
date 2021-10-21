import React, { useState } from 'react'
import Buyer from '../RoleIcon/Buyer'
import styled from 'styled-components'
import Seller from '../RoleIcon/Seller'
import { fonts } from '../../globalStyles/fonts'
import darkPolygonBg from '../../stories/assets/dark-polygon.svg'
import arrowRightIcon from '../../stories/assets/arrow-right.svg'
import whitePolygonBg from '../../stories/assets/white-polygon.svg'

export interface OptionProps {
  text?: string
  label?: string
  value: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}
const ArrowRightIcon = styled.img`
  opacity: 0;
`
const RoleIcon = styled.div`
  background-image: url(${whitePolygonBg});
  background-repeat: no-repeat;
  padding: 16px;
`

const SelectWrapper = styled.button`
  ${fonts}
  font-family: 'Futura Std', Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  border: none;
  background: none;
  width: -webkit-fill-available;
  padding: 28px;
`

const RoleSelectWrapper = styled.div`
  z-index: 1;
  cursor: pointer;
  border-radius: 6px;
  background: #ffffff;
  box-shadow: 2px 2px 8px 4px rgb(0 0 0 / 3%);
  :hover {
    background: #f5f9ff;
    border: 1px solid #041d42;
    box-sizing: border-box;
    box-shadow: none;
    ${RoleIcon} {
      background-image: url(${darkPolygonBg});
    }
    ${ArrowRightIcon} {
      opacity: inherit;
    }
    ${SelectWrapper} {
      padding: 27px;
    }
  }
`

const TextWrapper = styled.div`
  margin: auto;
  @media (min-width: 360px) {
    max-width: 170px;
    margin: auto;
  }
`
const RoleTitle = styled.h6`
  font-family: 'Futura Std';
  font-size: 16px;
  line-height: 19px;
  font-weight: normal;
  margin: 0;
  color: #041d42;
  text-align: start;
`
const RoleText = styled.p`
  color: #979797;
  font-size: 14px;
  max-width: 161px;
  line-height: 17px;
  margin: 0;
  text-align: start;
  margin-block-start: 4px;
  @media (min-width: 360px) {
    max-width: 239px;
  }
`

export const Option: React.FC<OptionProps> = ({
  label,
  text,
  value,
  onClick,
}) => {
  const [isMouseHover, setIsMouseHover] = useState(true)
  return (
    <RoleSelectWrapper
    onMouseOver={() => setIsMouseHover(false)}
    onMouseLeave={() => setIsMouseHover(true)}
    >
      <SelectWrapper onClick={onClick} value={value}>
        <RoleIcon>
          {label === 'Buyer' ? (
            <Buyer isMouseHover={isMouseHover} />
          ) : (
            <Seller isMouseHover={isMouseHover} />
          )}
        </RoleIcon>
        <TextWrapper>
          <RoleTitle>{label}</RoleTitle>
          <RoleText>{text}</RoleText>
        </TextWrapper>
        <ArrowRightIcon src={arrowRightIcon} alt='Arrow icon' />
      </SelectWrapper>
    </RoleSelectWrapper>
  )
}

