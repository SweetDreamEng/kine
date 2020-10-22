import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Login from './Login'
import ForgotPassword from './Forgot'
import ForgotPasswordCode from './ForgotCode'
import ResetPassword from './Reset'
import ChangePassword from './Change'
import NewPassword from './NewPassword'

const AuthRoutes = () => {
  return (
    <Switch>
      <Route exact path={'/login'} component={Login} />
      <Route exact path="/forgot" component={ForgotPassword} />
      <Route exact path="/forgot-code" component={ForgotPasswordCode} />
      <Route exact path="/reset" component={ResetPassword} />
      <Route exact path="/change" component={ChangePassword} />
      <Route exact path="/new-password" component={NewPassword} />
    </Switch>
  )
}

export default AuthRoutes
