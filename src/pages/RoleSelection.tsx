import { FC } from 'react'
import GenericContainerPage from './GenericContainerPage'
import { RoleSelectionContainer } from '../containers/RoleSelectionContainer'

export const RoleSelectionPage: FC = () => {
  return (
    <GenericContainerPage>
      <RoleSelectionContainer />
    </GenericContainerPage>
  )
}
