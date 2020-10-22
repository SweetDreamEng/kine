import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Users from 'pages/Admin/Users'

const AdminRoutes = () => {
  return (
    <Switch>
      <Route exact path="/users" component={Users} />
    </Switch>
  )
}

export default AdminRoutes
