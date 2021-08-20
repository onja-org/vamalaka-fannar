import './App.css'
import { Route, Switch } from 'react-router'

import { Home } from './pages/Home'
import { RegisterPage } from './pages/RegisterPage'
import { LanguagePage } from './pages/LanguagePage'
import { LoginPage } from './pages/LoginPage'
import GenericContainerPage from './pages/GenericContainerPage'
import { Paths } from './paths'

function App() {
  return (
    <div className='App'>
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
    </div>
  )
}

export default App
