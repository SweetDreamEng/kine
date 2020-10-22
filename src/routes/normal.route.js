import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

/**
 * @description creates a normal route to any route.
 * @observe if user is logged in this route will push the user to the dashboard, if you do not want this to happen
 * just use a Route component from react-router-dom.
 */
const NormalRoute = ({ user, children, path, component, ...rest }) => {
  if (user && user.challengeName !== "NEW_PASSWORD_REQUIRED") {
    return <Redirect to="/programs" />;
  }
  return <Route exact path={path} render={component ? component : () => children} />;
};

const mapStateToProps = ({ AuthReducer }) => ({
  user: AuthReducer.user,
});
export default connect(mapStateToProps)(NormalRoute);
