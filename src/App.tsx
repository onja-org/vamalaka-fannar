import { Route, Switch } from 'react-router-dom'
import './App.css'
import GenericContainerPage from '../src/pages/GenericContainerPage'
import { HomePage } from './pages/HomePage'
import { HowItWorksPage } from './pages/HowItWorksPage'
import { LanguagePage } from './pages/LanguagePage'
import { LoginPage } from './pages/LoginPage'
import { MyAccountPage } from './pages/MyAccount'
import { OnboardingPage } from './pages/OnboardingPage'
import { Paths } from './paths'

function App() {
  return (
    <div className='App'>
      <Switch>
        <GenericContainerPage>
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
            <OnboardingPage />
          </Route>
          <Route path={Paths.HOWITWORKS}>
            <HowItWorksPage />
          </Route>
          <Route path={Paths.PROFILE}>
            <MyAccountPage />
          </Route>
        </GenericContainerPage>
      </Switch>
    </div>
  )
}

export default App
