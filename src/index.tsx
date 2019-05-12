import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css'

render(
  <Provider store={store}>
    <BrowserRouter key={new Date().valueOf()}>
      {Routes}
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'))
