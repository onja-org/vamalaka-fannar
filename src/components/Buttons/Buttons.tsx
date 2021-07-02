import React from 'react'
import styled from 'styled-components'
import { fonts } from '../../globalStyles/fonts'
export interface ButtonsProps {
  label?: string
  learnabled?: boolean
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
  position: relative;
  top: 6px;
  left: -6px;
`
const Button = styled.button<ButtonsProps>`
  ${fonts}
  font-family: 'Garamond', Arial, Helvetica, sans-serif;
  border: none;
  position: relative;
  top: -3px;
  left: 3px;
  outline: none;
  font-size: 24px;
  line-height: 27px;
  font-style: normal;
  font-weight: normal;
  font-family: 'Garamond';
  color: ${(props) => (props.learnabled ? '#FFFFFF' : '#041d42')};
  background-color: ${(props) => (props.learnabled ? '#041d42' : '#FFFFFF')};
  padding: ${(props) =>
    props.learnabled ? '12px 20px 11px 20px' : '12px 28px 11px 28px'};
  border: ${(props) => (props.learnabled ? 'none' : '2px solid #041d42')};
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
  learnabled,
  ...props
}) => {
  return (
    <FirstWrapper>
      <SecondWrapper>
        <Button
          type='button'
          learnabled={learnabled ? true : false}
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
