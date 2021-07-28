import GenericContainerPage from './GenericContainerPage'
import { RoleSelectionContainer } from '../containers/RoleSelectionContainer'
import { RegisterPage } from './RegisterPage'
import { LoginPage } from './LoginPage'
import { LanguagePage } from './LanguagePage'
import { Route, Switch } from 'react-router-dom'
import { Paths } from '../paths'

export const RoleSelectionPage = () => {
  return (
    <GenericContainerPage>
      <Switch>
        <Route path={Paths.DEFAULT} exact>
          <RoleSelectionContainer />
        </Route>
        <Route path={Paths.LANGUAGE}>
          <LanguagePage />
        </Route>
        <Route path={Paths.LOGIN}>
          <LoginPage />
        </Route>
        <Route path={Paths.REGISTER_ACCOUNT}>
          <RegisterPage />
        </Route>
      </Switch>
    </GenericContainerPage>
  )
}
