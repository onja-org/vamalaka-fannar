import React from 'react'
import styled from 'styled-components'
import Buttons from '../Buttons/Buttons'
import Input from '../InputName/InputName'
import { TermsAndConditions } from '../TermsAndConditions/TermsAndConditions'

export interface FormProps {
  input: {
    label: string
    placeholder: string
    name: string
    value: string
    onChange: () => void
  }
  button: {
    type: string
    label: string
    learnEnabled: boolean
    disabled: boolean
    onClick: () => void
  }
  condition: {
    termsLabel: string
    href: string
    serviceTerms: string
    isChecked: boolean
  }
}

export const Form: React.FC<FormProps> = ({ input, button, condition }) => {
  return (
    <Container onSubmit={() => {}}>
      <Input
        placeholder={input.placeholder}
        // name={input.name}
        label={input.label}
        value={input.value}
        className={'large'}
      />
      <Input
        placeholder='Enter email adress'
        className={'large'}
        label='Email adress'
        value={input.value}
      />
      <Input
        placeholder='Enter a password'
        className={'large'}
        label='Create password'
        value={input.value}
      />
      <TermsAndConditions
        isChecked={condition.isChecked}
        href={condition.href}
        serviceTerms={condition.serviceTerms}
        termsLabel={condition.termsLabel}
      />
      <Wrapper>
        <div>
          <Buttons
            label='Register Account'
            learnEnabled={button.learnEnabled}
            disabled={button.disabled}
            onClick={button.onClick}
          />
        </div>

        <Buttons
          label='Register with Google'
          learnEnabled={false}
          disabled={false}
          onClick={button.onClick}
        />
      </Wrapper>
    </Container>
  )
}

const Container = styled.form``

const Wrapper = styled.div`
  div {
    margin-block-start: 10px;
    margin-block-end: 10px;
  }
  @media (min-width: 1000px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
