import * as React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import ProtectedRoute from '../shared/components/ProtectedRoute'
import Footer from './Footer'
import Header from './Header'

const styles = require('./scss/App.scss') // tslint:disable-line no-var-requires

interface LoadableRoute {
  path: string
  LazyComponent: React.LazyExoticComponent<any> // tslint:disable-line:no-any
}

const routes: LoadableRoute[] = [
  {
    path: '/sign-up',
    LazyComponent: React.lazy(() => import('../sign-up/SignUp')),
  },
  {
    path: '/login',
    LazyComponent: React.lazy(() => import('../login/Login')),
  },
  {
    path: '/creator',
    LazyComponent: React.lazy(() => import('../adventure-creator/AdventureCreator')),
  },
]

const protectedRoutes: LoadableRoute[] = [
  {
    path: '/dashboard',
    LazyComponent: React.lazy(() => import('../dashboard/Dashboard')),
  },
  {
    path: '/game',
    LazyComponent: React.lazy(() => import('../game/Game')),
  },
  {
    path: '/minigames',
    LazyComponent: React.lazy(() => import('../minigames/Minigames')),
  },
]

const LandingPage = React.lazy(() => import('../landing-page/LandingPage'))

const LoadingComponent = <div>Loading...</div>

const App: React.StatelessComponent<{}> = () => (
  <>
    <Header/>
      <Switch>
        {routes.map(({ path, LazyComponent }: LoadableRoute) => (
          <Route key={path}
            exact={true}
            path={path}>
            <React.Suspense fallback={LoadingComponent}>
              <div
                key={path}
                className={styles.content}>
                <LazyComponent />
              </div>
            </React.Suspense>
          </Route>
        ))}
        {protectedRoutes.map(({ path, LazyComponent }: LoadableRoute) => (
          <ProtectedRoute key={path}
            exact={true}
            path={path}>
            <React.Suspense fallback={LoadingComponent}>
              <div
                key={path}
                className={styles.content}>
                <LazyComponent />
              </div>
            </React.Suspense>
          </ProtectedRoute>
        ))}
        <Route
          exact={true}
          path=''>
          <React.Suspense fallback={LoadingComponent}>
            <LandingPage />
          </React.Suspense>
        </Route>
        <Route path='/*'>
          <Redirect to='/'/>
        </Route>
      </Switch>
    <Footer isOnLandingPage={true}/>
  </>
)

export default App
