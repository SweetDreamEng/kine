import { get } from 'lodash'
import { AUDIO_PLAY_STATUS } from 'redux/constants'

export const globalStateSelector = (state) =>
  get(state, 'global')

export const usersSelector = (state) => 
  get(state, 'global.users', null)
  
export const usersSelector = (state) => 
  get(state, 'global.user', null)
