import Button from '../Buttons/Buttons'
import emailIcon from './icons/email.svg'

function Email() {
  return (
    <Button
      isPrimary={false}
      label={'Send an email'}
      type='button'
      icon={emailIcon}
    />
  )
}

export default Email
