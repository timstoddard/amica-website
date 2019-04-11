import * as React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { createLoadable } from '../routes'
import ProtectedRoute from '../shared/components/ProtectedRoute'
import Footer from './Footer'
import Header from './Header'

const styles = require('./scss/App.scss') // tslint:disable-line no-var-requires

interface LoadableRoute {
  path: string
  loader: () => Promise<unknown>
}

const routes: LoadableRoute[] = [
  {
    path: '/',
    loader: (): Promise<unknown> => import('../landing-page/LandingPage'),
  },
  {
    path: '/sign-up',
    loader: (): Promise<unknown> => import('../sign-up/SignUp'),
  },
  {
    path: '/login',
    loader: (): Promise<unknown> => import('../login/Login'),
  },
  // TODO move game back to protected routes
  {
    path: '/game',
    loader: (): Promise<unknown> => import('../game/Game'),
  },
  {
    path: '/creator',
    loader: (): Promise<unknown> => import('../adventure-creator/AdventureCreator'),
  },
]

const protectedRoutes: LoadableRoute[] = [
  {
    path: '/dashboard',
    loader: (): Promise<unknown> => import('../dashboard/Dashboard'),
  },
  /*{
    path: '/game',
    loader: (): Promise<unknown> => import('../game/Game'),
  },*/
  {
    path: '/minigames',
    loader: (): Promise<unknown> => import('../minigames/Minigames'),
  },
]

const App: React.StatelessComponent<{}> = () => (
  <>
    <Header />
    <div className={styles.content}>
      <Switch>
        {routes.map(({ path, loader }: LoadableRoute) => (
          <Route
            key={path}
            exact={true}
            path={path}
            component={createLoadable(loader)} />
        ))}
        {protectedRoutes.map(({ path, loader }: LoadableRoute) => (
          <ProtectedRoute
            key={path}
            exact={true}
            path={path}
            component={createLoadable(loader)} />
        ))}
        <Route path='/*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </div>
    <Footer />
  </>
)

export default App
