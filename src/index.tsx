import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import App from './app/App'
import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css'

render(
  <Provider store={store}>
    <BrowserRouter key={new Date().valueOf()}>
      <Route
        path='/'
        component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'))
