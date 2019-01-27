import * as React from 'react'
import * as Loadable from 'react-loadable'
import { Route } from 'react-router-dom'

import LoadingPage from './loading-page/LoadingPage'

export const createLoadable = (loader: () => Promise<any>) => Loadable({
  loader,
  loading: LoadingPage,
  delay: 1000, // 1 second
  timeout: 5000, // 5 seconds
} as Loadable.OptionsWithoutRender<any>)

const Routes = (
  <Route
    path='/'
    component={createLoadable((): Promise<any> => import('./app/App'))} />
)

export default Routes
