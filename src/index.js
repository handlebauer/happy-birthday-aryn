import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import './index.css'
import './App.scss'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import App from './App'

const basename = process.env.NODE_ENV === 'development'
  ? '/'
  : '/happy-birthday'

ReactDOM.render(
  <Router basename={basename}>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </Router>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
