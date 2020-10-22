import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PrivateRoute from './private.route'
import NormalRoute from './normal.route'

import AuthRoutes from 'pages/Auth/routes'
import {AdminRoutes} from 'pages/Admin'
import NotFound from 'pages/404/404'

/**
 * @description this is the main routes for the main application src/app.
 * @observe use :module route param when you are creating an application that is inside
 * a module.
 * AVAILABLE : collaboration, marketing, sales, administration.
 * use ./navigation.js file to set your routes in the navbar and sidebar.
 */
const Routes = ({ loading_current_user }) => {
  //This checks if the api for check if there is any user logged in has made its request.
  // if (loading_current_user) {
  // 	return null;
  // }

  return (
    <Switch>
      <PrivateRoute component={AdminRoutes} path={['/programs', '/groups', '/corpo', '/shop', '/users']} />

      {/* Authentication Routes. */}
      <NormalRoute component={AuthRoutes} path={['/login', '/forgot', '/forgot-code', '/reset', '/change', '/new-password']} />

      <NormalRoute path={'/'}>
        <Redirect to="/login" />
      </NormalRoute>

      <Route path="*" component={NotFound} />
    </Switch>
  )
}

const mapStateToProps = ({ AuthReducer }) => ({
  loading_current_user: AuthReducer.loading_current_user,
})

export default connect(mapStateToProps)(Routes)
