import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import rootReducer from './redux/reducers'

const store = createStore(rootReducer)

import Routes from './routes'

render(
  <Provider store={store}>
    <BrowserRouter key={new Date().valueOf()}>
      {Routes}
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'))
