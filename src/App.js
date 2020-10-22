import React, { useEffect, useState } from 'react'
import Routes from './routes/routes'

import { useDispatch } from 'react-redux'
import { authCurrentAuthenticatedUser } from './redux/modules/auth/actions'

const App = () => {
  const [hasMountedBefore, setHasMountedBefore] = useState(false)
  const dispatch = useDispatch()
  /**
   * @description whenever the application mounts we make a api call
   * to aws server to check if there is any user logged in.
   */
  useEffect(() => {
    if (hasMountedBefore) {
      return;
    }
    dispatch(authCurrentAuthenticatedUser())
    setHasMountedBefore(true)
  }, [])

  return <Routes />
}

export default App
