import { handleActions } from 'redux-actions'
import { requestSuccess, requestFail } from 'redux/api/request'
import * as CONSTANTS from './constants'

import { omit, reject } from 'lodash'

const getInitialState = () => {
  return {
    group: null,
    groups: [],
    category: null,
    categories: [],
    product: null,
    products: [],
    coins: [],
    subscriptions: [],
    exercise: null,
    exericses: [],
    post: null,
    posts: [],
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [requestSuccess(CONSTANTS.GET_GROUP)]: (state, { payload }) => ({
    ...state,
    status: requestSuccess(CONSTANTS.GET_GROUP),
    group: payload,
    error: null
  }),

  [requestFail(CONSTANTS.GET_GROUP)]: (state, { payload }) => ({
    ...state,
    status: requestFail(CONSTANTS.GET_GROUP),
    error: payload
  }),

  [requestSuccess(CONSTANTS.GET_GROUPS)]: (state, { payload }) => ({
    ...state,
    status: requestSuccess(CONSTANTS.GET_GROUPS),
    groups: payload.results,
    params: {
      ...state.params,
      ...omit(payload, 'results')
    },
    error: null
  }),

  [requestFail(CONSTANTS.GET_GROUPS)]: (state, { payload }) => ({
    ...state,
    status: requestFail(CONSTANTS.GET_GROUPS),
    error: payload
  }),

  [requestSuccess(CONSTANTS.CREATE_GROUP)]: (state, { payload }) => ({
    ...state,
    status: requestSuccess(CONSTANTS.CREATE_GROUP),
    group: payload,
    error: null
  }),

  [requestFail(CONSTANTS.CREATE_GROUP)]: (state, { payload }) => ({
    ...state,
    status: requestFail(CONSTANTS.CREATE_GROUP),
    error: payload
  }),

  [requestSuccess(CONSTANTS.UPDATE_GROUP)]: (state, { payload }) => ({
    ...state,
    status: requestSuccess(CONSTANTS.UPDATE_GROUP),
    group: payload,
    error: null
  }),

  [requestFail(CONSTANTS.UPDATE_GROUP)]: (state, { payload }) => ({
    ...state,
    status: requestFail(CONSTANTS.UPDATE_GROUP),
    error: payload
  }),

  [requestSuccess(CONSTANTS.DELETE_GROUP)]: (state, { payload }) => ({
    ...state,
    status: requestSuccess(CONSTANTS.DELETE_GROUP),
    groups: reject(state.groups, { id: payload.id }),
    error: null
  }),

  [requestFail(CONSTANTS.DELETE_GROUP)]: (state, { payload }) => ({
    ...state,
    status: requestFail(CONSTANTS.DELETE_GROUP),
    error: payload
  }),

}, getInitialState())
