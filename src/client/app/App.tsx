import * as React from 'react'
import { Route } from 'react-router-dom'
import { createLoadable } from '../routes'
import ProtectedRoute from '../shared/components/ProtectedRoute'
import Footer from './Footer'
import Header from './Header'

const styles = require('./scss/App.scss') // tslint:disable-line no-var-requires

interface LoadableRoute {
  path: string
  loader: () => Promise<any>
}

const routes: LoadableRoute[] = [
  {
    path: '/',
    loader: (): Promise<any> => import('../landing-page/LandingPage'),
  },
  {
    path: '/sign-up',
    loader: (): Promise<any> => import('../sign-up/SignUp'),
  },
  {
    path: '/login',
    loader: (): Promise<any> => import('../login/Login'),
  },
]

const protectedRoutes: LoadableRoute[] = [
  {
    path: '/dashboard',
    loader: (): Promise<any> => import('../dashboard/Dashboard'),
  },
]

const App: React.StatelessComponent<{}> = () => (
  <>
    <Header />
    <div className={styles.content}>
      {protectedRoutes.map(({ path, loader }: LoadableRoute) => (
        <ProtectedRoute
          key={path}
          exact={true}
          path={path}
          component={createLoadable(loader)} />
      ))}
      {routes.map(({ path, loader }: LoadableRoute) => (
        <Route
          key={path}
          exact={true}
          path={path}
          component={createLoadable(loader)} />
      ))}
    </div>
    <Footer />
  </>
)

export default App
