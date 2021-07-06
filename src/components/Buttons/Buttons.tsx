import React from 'react'
import styled from 'styled-components'
import { fonts } from '../../globalStyles/fonts'

export interface ButtonsProps {
  label?: string
  learnEnabled?: boolean
  disabled?: boolean
  onClick?: () => void
}

const FirstWrapper = styled.div`
  display: inline-block;
  position: relative;
  background: rgba(252, 70, 43, 0.3);
`
const SecondWrapper = styled.div`
  display: inline-block;
  background: rgba(21, 140, 177, 0.3);
  position: absolute;
  top: 6px;
  left: -6px;
`
const Button = styled.button<ButtonsProps>`
  @font-face {
    font-family: 'Garamond';
    src: local('Garamond'), local('Garamond'),
      url(${fonts}) format('woff2'), url(${fonts}) format('woff');
    font-weight: 400;
    font-style: normal;
  }

  position: absolute;
  top: -3px;
  left: 3px;
  outline: none;
  font-size: 24px;
  line-height: 27px;
  font-style: normal;
  font-weight: normal;
  font-family: 'Garamond';
  color: ${(props) => (props.learnEnabled ? '#FFFFFF' : '#041d42')};
  background-color: ${(props) => (props.learnEnabled ? '#041d42' : '#FFFFFF')};
  padding: ${(props) =>
    props.learnEnabled ? '12px 20px 11px 20px' : '12px 28px 11px 28px'};
  border: ${(props) => (props.learnEnabled ? 'none' : '2px solid #041d42')};
    props.learnEnabled ? '12px 20px 11px 20px' : '12px 28px 11px 28px'};
  cursor: pointer;

  &:disabled {
    color: '#FFFFFF';
    cursor: not-allowed;
    background-color: gray;
  }
`
const Buttons: React.FC<ButtonsProps> = ({
  label,
  onClick,
  disabled,
  learnEnabled,
  ...props
}) => {
  return (
    <FirstWrapper>
      <SecondWrapper>
        <Button
          type='button'
          learnEnabled={learnEnabled ? true : false}
          disabled={disabled}
          onClick={() => ''}
          {...props}>
          {label}
        </Button>
      </SecondWrapper>
    </FirstWrapper>
  )
}
export default Buttons
