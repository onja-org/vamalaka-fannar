import React from 'react'
import styled from 'styled-components'
import { fonts } from '../../globalStyles/font'
import checkedSvg from './checked.svg'

export interface TermsAndConditionsProps {
  termsLabel: string
  href: string
  serviceTerms: string
  isChecked?: boolean
}

const TermsAndConditionsStyle = styled.label`
  ${fonts}
  font-family: "Futura Std";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  gap: 18.67px;
  color: #979797;

  .terms_and_conditions {
    text-decoration: underline;
    color: currentColor;
  }
`

const Checkbox = styled.div`
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  .checkMark {
    position: absolute;
    top: 0;
    left: 0;
    height: 14.67px;
    width: 14.67px;
    background-color: #fff;
    border: 1px solid #979797;
    border-radius: 2px;
  }

  .checkbox {
    margin: 0;
  }
  .checkbox:checked ~ .checkMark {
    background-color: #041d42;
  }

  .checkbox:checked ~ .checkMark:after {
    content: '';
    position: absolute;
    display: block;
    background-image: url(${checkedSvg});
    left: 3px;
    top: 4px;
    width: 9.34px;
    height: 8px;
    background-repeat: no-repeat;
  }
`

export const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({
  termsLabel,
  href,
  serviceTerms,
  isChecked,
  ...props
}) => {
  return (
    <TermsAndConditionsStyle {...props}>
      <Checkbox>
        <input
          type='checkbox'
          name='termAndCondition'
          className='checkbox'
          id='termAndCondition'
          checked={isChecked}
        />
        <span className='checkMark'></span>
      </Checkbox>
      <span>
        {termsLabel}{' '}
        <a className='terms_and_conditions' href={href}>
          {serviceTerms}
        </a>
      </span>
    </TermsAndConditionsStyle>
  )
}
