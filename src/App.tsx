import GenericContainerPage from './pages/GenericContainerPage'
import { RegisterPage } from './pages/RegisterPage'
import { LoginPage } from './pages/LoginPage'
import { LanguagePage } from './pages/LanguagePage'
import { Route, Switch } from 'react-router-dom'
import { Paths } from './paths'

import { Home } from './pages/Home'

function App() {
  return (
    <GenericContainerPage>
      <Switch>
        <Route path={Paths.DEFAULT} exact>
          <Home />
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

export default App
