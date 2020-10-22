import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cleanRedirect } from 'redux/modules/auth/actions'

/**
 * @description redirect user to a route whenever redirect prop changes.
 * @param {string} redirect path to
 */
const useRedirect = (redirect) => {
  const history = useHistory()
  const dispatch = useDispatch()
  useEffect(() => {
    const redirectToRoute = async () => {
      if (redirect && typeof redirect === 'string') {
        await history.push(redirect);
        //this is just to reset the redirect.
        await dispatch(cleanRedirect())
      }
    };

    redirectToRoute()
  }, [redirect])
};

export default useRedirect
