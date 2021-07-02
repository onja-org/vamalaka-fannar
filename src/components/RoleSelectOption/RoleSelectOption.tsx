import React from 'react'
import styled, { css } from 'styled-components'
import { fonts } from '../../globalStyles/fonts'
import arrowRightIcon from '../../stories/assets/arrow-right.svg'
import darkPolygonBg from '../../stories/assets/dark-polygon.svg'
import whitePolygonBg from '../../stories/assets/white-polygon.svg'

export interface OptionProps {
  label?: string
  text?: string
  src?: string
  alt?: string
}

const polygonBg = css`
  background-repeat: no-repeat;
  max-width: 426px;
  padding-block-end: 16px;
  padding-block-start: 16px;
  padding-inline-end: 16px;
  padding-inline-start: 16px;
`

const optionWrapperStyles = css`
  ${fonts}
  font-family: 'Futura Std', Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-inline-start: 8px;
  padding-block-start: 10px;
  padding-block-end: 4px;
  align-items: center;
  box-sizing: border-box;
  border-radius: 6px;
`

export const Option: React.FC<OptionProps> = ({ label, text, src, alt }) => {
  return (
    <RoleSelectWrapper>
      <div
        className={
          label === 'Buyer'
            ? 'inner-select-wrapper-buyer'
            : 'inner-select-wrapper-seller'
        }>
        <div
          className={
            label === 'Buyer'
              ? 'dark-polygon-wrapper-bg'
              : 'white-polygon-wrapper-bg'
          }>
          <img src={src} alt={alt} />
        </div>
        <div className='text-wrapper'>
          <h6>{label}</h6>
          <p>{text}</p>
        </div>
        {label === 'Buyer' ? (
          <button className='arrow-right-wrapper' onClick={() => null}>
            <img src={arrowRightIcon} alt='Arrow icon' />
          </button>
        ) : (
          <button className='arrow-right-wrapper-hidden'>
            <img src={arrowRightIcon} alt='Arrow icon' />
          </button>
        )}
      </div>
    </RoleSelectWrapper>
  )
}

const RoleSelectWrapper = styled.div`
  .inner-select-wrapper-buyer {
    background-color: #f5f9ff;
    border: 1px solid #041d42;
    box-shadow: 0px 4px 14px 1px rgba(0, 0, 0, 0.04);
    ${optionWrapperStyles}
  }

  .inner-select-wrapper-seller {
    box-shadow: 0px 2px 14px 1px rgba(0, 0, 0, 0.06);
    ${optionWrapperStyles}
  }

  .dark-polygon-wrapper-bg {
    background-image: url(${darkPolygonBg});
    ${polygonBg}
  }

  .white-polygon-wrapper-bg {
    background-image: url(${whitePolygonBg});
    ${polygonBg}
  }

  .text-wrapper h6 {
    font-size: 16px;
    line-height: 19px;
    margin-block-start: 16px;
    margin-block-end: 0;
    color: #041d42;
  }

  .text-wrapper p {
    max-width: 161px;
    font-size: 14px;
    line-height: 17px;
    margin-block-start: 4px;
    color: #979797;
  }
  .text-wrapper {
    @media (max-width: 360px) {
      text-align: center;
      margin: 0;
    }
    @media (max-width: 476px) {
      max-width: 150px;
    }
  }

  .text-wrapper h6 {
    font-family: 'Futura Std';
    font-size: 16px;
    line-height: 19px;
    margin-block-start: 16px;
    margin-block-end: 0;
    color: #041d42;
  }

  .arrow-right-wrapper {
    border: none;
    background-color: transparent;
    cursor: pointer;
    justify-self: end;
    padding-inline-end: 8px;
    padding-inline-start: 0;
  }

  .arrow-right-wrapper-hidden {
    visibility: hidden;
    pointer-events: none;
  }

  @media (min-width: 375px) {
    .inner-select-wrapper-buyer,
    .inner-select-wrapper-seller {
      padding-inline-start: 28px;
    }

    .text-wrapper p {
      max-width: 239px;
    }

    .arrow-right-wrapper {
      padding-inline-end: 16px;
    }
  }
`
