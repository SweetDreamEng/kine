import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { _NAVIGATIONS } from './navigations';

/**
 * @description redirects the user to the first application of a module,
 * if module has no application use will be redirected to programs.
 */
const NavigationsRoute = ({
  match: {
    params: { module },
  },
}) => {
  if (!module) {
    return <Redirect to="/programs" />;
  }

  const found = _NAVIGATIONS.find((n) => n.name.toLowerCase() === module.toLowerCase());

  if (!found) {
    return <Redirect to="/programs" />;
  }

  if (!found.apps.length) {
    //silly alert. (will be removed.)
    window.alert("I'm sorry, we do not have added applications to this module yet.");
  }

  return <Redirect to={found.apps.length ? found.apps[0].path : '/programs'} />;
};

export default withRouter(NavigationsRoute);
