import React from 'react'
import styled from 'styled-components'
import AlertCircle from '../../images/alert-circle.svg'

export interface LimiteThumbnailProps {
    text: string
  }
  
  export const LimiteThumbnail: React.FC<LimiteThumbnailProps> = ({ text }) => (
    
    <Container>
       <Image src={AlertCircle} alt='Loading' />
      <Text>{text}</Text>
    </Container>
  )


  const Container = styled.div`
  text-align: center;

  `
  const Image = styled.img`
    width: 83.33px;
    height: 83.33px
  `

  const Text = styled.p`
  color: #979797;
  font-family: Futura Std;
  Weight:400px;
  font-size: 18px;
  line-height:24px;
  text-align: center;
  `