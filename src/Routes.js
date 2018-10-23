import React from 'react'
import { AnimatedSwitch } from 'react-router-transition'
import { Switch, Route } from 'react-router-dom'
import Login from './components/Login/Login'
import Convo from './components/Convo/Convo'
import Explain from './components/Explain/Explain'

const Routes = props => (
  <Switch>
    <Route
      exact
      path='/'
      render={props => <Login {...props} />}
    />
    <Route
      exact
      path='/it-is-your-birthday'
      render={props => <Explain {...props} />}
    />
    <Route
      exact
      path='/space-date'
      render={props => <Convo {...props} />}
    />
  </Switch>
)

Routes.propTypes = {

}

export default Routes
