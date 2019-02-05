import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
// Routes
import routes from 'routes'
// Services
import { serviceWorker } from 'services'
// Store
import { createContext } from 'store'
// Styles
import './index.scss'

const baseContext = createContext()

ReactDOM.render(
  <BrowserRouter>
    {renderRoutes(routes, {
      Provider: baseContext.Provider,
      Consumer: baseContext.Consumer,
      baseContext: baseContext._currentValue
    })}
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
