import { takeLatest } from 'redux-saga/effects'
import { get, pick } from 'lodash'
import * as CONSTANTS from 'redux/modules/admin/constants'
import apiCall from 'redux/api/apiCall'

/**
 * @description get a specified User.
 * @param {object} payload attributes
 * @returns Promise
 */
const doGetUser = apiCall({
  type: CONSTANTS.GET_USER,
  method: 'get',
  path: ({ payload }) => `/admin/users/${payload.id}/`
})

/**
 * @description get all Users.
 * @returns Promise
 */
const doGetUsers = apiCall({
  type: CONSTANTS.GET_USERS,
  method: 'get',
  path: () => `/admin/users/`
})

/**
 * @description Create a User
 * @returns Promise
 */
const doCreateUser = apiCall({
  type: CONSTANTS.CREATE_USER,
  method: 'post',
  path: () => `/admin/users/`
})

/**
 * @description check user attribute.
 * @param {string} payload attribute
 * @returns Promise
 */
const doUpdateUser = apiCall({
  type: CONSTANTS.UPDATE_USER,
  method: 'put',
  path: ({ payload }) => `/admin/users/${payload.id}/`
})

const doDeleteUser = apiCall({
  type: CONSTANTS.DELETE_USER,
  method: 'delete',
  path: ({ payload }) => `/admin/users/${payload.id}`,
  payloadOnSuccess: (res, { payload }) => ({ id: payload.id })
})

export default function* rootSaga () {
  yield takeLatest(CONSTANTS.GET_USER, doGetUser)
  yield takeLatest(CONSTANTS.GET_USERS, doGetUsers)
  yield takeLatest(CONSTANTS.CREATE_USER, doCreateUser)
  yield takeLatest(CONSTANTS.UPDATE_USER, doUpdateUser)
  yield takeLatest(CONSTANTS.DELETE_USER, doDeleteUser)
}
