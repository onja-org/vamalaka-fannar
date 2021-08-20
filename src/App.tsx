import { Route, Switch } from 'react-router'
import './App.css'
import GenericContainerPage from './pages/GenericContainerPage'
import { HomePage } from './pages/HomePage'
import { LanguagePage } from './pages/LanguagePage'
import { LoginPage } from './pages/LoginPage'
import { RoleSelectionPage } from './pages/RoleSelectionPage'
import { Paths } from './paths'

function App() {
  return (
    <div className='App'>
      <GenericContainerPage>
        <Switch>
          <Route path={Paths.DEFAULT} exact>
            <HomePage />
          </Route>
          <Route path={Paths.LANGUAGE}>
            <LanguagePage />
          </Route>
          <Route path={Paths.LOGIN}>
            <LoginPage />
          </Route>
          <Route path={Paths.SIGN_UP}>
            <RoleSelectionPage />
          </Route>
        </Switch>
      </GenericContainerPage>
    </div>
  )
}

export default App
