import { combineReducers } from 'redux'
import AuthReducer from './modules/auth/reducers'
import AdminReducer from './modules/admin/reducers'

const reducerCombination = combineReducers({
  AuthReducer,
  AdminReducer,
})

export default reducerCombination
