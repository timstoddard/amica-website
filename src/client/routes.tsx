import * as React from 'react'
import * as Loadable from 'react-loadable'
import { Redirect, Route, Switch } from 'react-router-dom'

import LoadingPage from './loading-page/LoadingPage'

interface LoadableRoute {
  path: string
  loader: () => Promise<any>
}

const routes: LoadableRoute[] = [
  {
    path: '/',
    loader: (): Promise<any> => import('./amica/Amica'),
  },
  {
    path: '/sign-up',
    loader: (): Promise<any> => import('./sign-up/SignUp'),
  },
]

const Routes = (
  <Switch>
    {routes.map(({ path, loader }: LoadableRoute) => (
      <Route
        key={path}
        exact={true}
        path={path}
        component={
          Loadable({
            loader,
            loading: LoadingPage,
            delay: 1000, // 1 second
            timeout: 5000, // 5 seconds
          } as Loadable.OptionsWithoutRender<any>)
        } />
    ))}
    <Route path='/*'>
      <Redirect to='/' />
    </Route>
  </Switch>
)

export default Routes
