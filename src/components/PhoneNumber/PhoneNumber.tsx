import React, { FC, useState } from 'react'
import Button from '../Buttons/Buttons'
import phone from './icons/phoneNumber.svg'

export interface PropType {
  label: string,
  number: string
}

const PhoneNumber: React.FC<PropType> = ({label, number}) => {
  const [isPhoneNumberShown, setIsPhoneNumberShown] = React.useState<boolean>(false)
  
  function handleClickButton(event: React.MouseEvent) {
    setIsPhoneNumberShown(!isPhoneNumberShown)
  }

  return (
    <>
    {!isPhoneNumberShown
      ? <Button
        isPrimary={false}
        label={label}
        type='button'
        icon={phone}
        onClick={handleClickButton}
      />
      : <div>{number}</div>
    }
    </>
  )
}

export default PhoneNumber
