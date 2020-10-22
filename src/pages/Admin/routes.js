import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Program from 'pages/Admin/Program'
import Groups from 'pages/Admin/Groups'
import Shop from 'pages/Admin/Shop'
import Corpo from 'pages/Admin/Corpo'
import Users from 'pages/Admin/Users'

const AdminRoutes = () => {
  return (
    <Switch>
      <Route exact path="/programs" component={Program} />
      <Route exact path="/groups" component={Groups} />
      <Route exact path="/shop" component={Shop} />
      <Route exact path="/corpo" component={Corpo} />
      <Route exact path="/users" component={Users} />
    </Switch>
  )
}

export default AdminRoutes
