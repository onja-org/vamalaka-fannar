import React from 'react'
import styled from 'styled-components'
import { fonts } from '../../globalStyles/fonts'

export interface StepProps {
  stepNum: string
  stepName: string
}

const StepCounter: React.FC<StepProps> = ({ stepNum, stepName }) => {
  return (
    <Container>
      <StepNum>{`Step ${stepNum}/02`}</StepNum>
      <StepName>{stepName}</StepName>
    </Container>
  )
}

export default StepCounter

const Container = styled.div`
  ${fonts}
  font-family: 'Futura Std', Arial, Helvetica, sans-serif;
  width: 135px;
  text-align: right;
`

const StepNum = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #bdbdbd;
  padding: 0 0 4px 0;
  text-transform: uppercase;
`

const StepName = styled.p`
  font-weight: 650;
  font-size: 16px;
  line-height: 19px;
  color: #979797;
  padding: 0;
`
