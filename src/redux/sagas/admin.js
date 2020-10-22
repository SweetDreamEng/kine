import { takeLatest } from 'redux-saga/effects'
import { get, pick } from 'lodash'
import * as CONSTANTS from 'redux/modules/admin/constants'
import apiCall from 'redux/api/apiCall'

/**
 * @description get a specified Group.
 * @param {object} payload attributes
 * @returns Promise
 */
const doGetGroup = apiCall({
  type: CONSTANTS.GET_GROUP,
  method: 'get',
  path: ({ payload }) => `/admin/groups/${payload.id}/`
})

/**
 * @description get all Groups.
 * @returns Promise
 */
const doGetGroups = apiCall({
  type: CONSTANTS.GET_GROUPS,
  method: 'get',
  path: () => `/admin/groups/`
})

/**
 * @description Create a Group
 * @returns Promise
 */
const doCreateGroup = apiCall({
  type: CONSTANTS.CREATE_GROUP,
  method: 'post',
  path: () => `/admin/groups/`
})

/**
 * @description check user attribute.
 * @param {string} payload attribute
 * @returns Promise
 */
const doUpdateGroup = apiCall({
  type: CONSTANTS.UPDATE_GROUP,
  method: 'put',
  path: ({ payload }) => `/admin/groups/${payload.id}/`
})

const doDeleteGroup = apiCall({
  type: CONSTANTS.DELETE_GROUP,
  method: 'delete',
  path: ({ payload }) => `/admin/groups/${payload.id}`,
  payloadOnSuccess: (res, { payload }) => ({ id: payload.id })
})

/**
 * @description Shop Categories
 */

const doGetCategory = apiCall({
  type: CONSTANTS.GET_CATEGORY,
  method: 'get',
  path: ({ payload }) => `/admin/categories/${payload.id}/`
})

const doGetCategories = apiCall({
  type: CONSTANTS.GET_CATEGORIES,
  method: 'get',
  path: () => `/admin/categories/`
})

const doCreateCategory = apiCall({
  type: CONSTANTS.CREATE_CATEGORY,
  method: 'post',
  path: () => `/admin/categories/`
})

const doUpdateCategory = apiCall({
  type: CONSTANTS.UPDATE_CATEGORY,
  method: 'put',
  path: ({ payload }) => `/admin/categories/${payload.id}/`
})

const doDeleteCategory = apiCall({
  type: CONSTANTS.DELETE_CATEGORY,
  method: 'delete',
  path: ({ payload }) => `/admin/categories/${payload.id}`,
  payloadOnSuccess: (res, { payload }) => ({ id: payload.id })
})

/**
 * @description Shop Products
 */

const doGetProducts = apiCall({
  type: CONSTANTS.GET_PRODUCTS,
  method: 'get',
  path: () => `/admin/products/`
})

const doCreateProduct = apiCall({
  type: CONSTANTS.CREATE_PRODUCT,
  method: 'post',
  path: () => `/admin/products/`
})

const doUpdateProduct = apiCall({
  type: CONSTANTS.UPDATE_PRODUCT,
  method: 'put',
  path: ({ payload }) => `/admin/products/${payload.id}/`
})

const doDeleteProduct = apiCall({
  type: CONSTANTS.DELETE_PRODUCT,
  method: 'delete',
  path: ({ payload }) => `/admin/products/${payload.id}`,
  payloadOnSuccess: (res, { payload }) => ({ id: payload.id })
})

/**
 * @description Shop Coins
 */

const doGetCoins = apiCall({
  type: CONSTANTS.GET_COINS,
  method: 'get',
  path: () => `/admin/coins/`
})

const doUpdateCoin = apiCall({
  type: CONSTANTS.UPDTAE_COIN,
  method: 'put',
  path: ({ payload }) => `/admin/coins/${payload.id}/`
})

/**
 * @description Shop Subscription Prices
 */

const doGetSubscriptionsPricing = apiCall({
  type: CONSTANTS.GET_SUBSCRIPTIONS_PRICING,
  method: 'get',
  path: () => `/admin/subscriptions/`
})

const doUpdateSubscription = apiCall({
  type: CONSTANTS.UPDTAE_SUBSCRIPTION_PRICING,
  method: 'put',
  path: ({ payload }) => `/admin/subscriptions/${payload.id}/`
})

/**
 * @description Exercises
 */

const doGetExercise = apiCall({
  type: CONSTANTS.GET_EXERCISE,
  method: 'get',
  path: ({ payload }) => `/admin/exercises/${payload.id}/`
})

const doGetExercises = apiCall({
  type: CONSTANTS.GET_EXERCISES,
  method: 'get',
  path: () => `/admin/exercises/`
})

const doCreateExercise = apiCall({
  type: CONSTANTS.CREATE_EXERCISE,
  method: 'post',
  path: () => `/admin/exercises/`
})

const doUpdateExercise = apiCall({
  type: CONSTANTS.UPDATE_EXERCISE,
  method: 'put',
  path: ({ payload }) => `/admin/exercises/${payload.id}/`
})

const doDeleteExercise = apiCall({
  type: CONSTANTS.DELETE_EXERCISE,
  method: 'delete',
  path: ({ payload }) => `/admin/exercises/${payload.id}`,
  payloadOnSuccess: (res, { payload }) => ({ id: payload.id })
})

/**
 * @description Posts
 */

const doGetPost = apiCall({
  type: CONSTANTS.GET_POST,
  method: 'get',
  path: ({ payload }) => `/admin/posts/${payload.id}/`
})

const doGetPosts = apiCall({
  type: CONSTANTS.GET_POSTS,
  method: 'get',
  path: () => `/admin/posts/`
})

const doCreatePost = apiCall({
  type: CONSTANTS.CREATE_POST,
  method: 'post',
  path: () => `/admin/posts/`
})

const doUpdatePost = apiCall({
  type: CONSTANTS.UPDATE_POST,
  method: 'put',
  path: ({ payload }) => `/admin/posts/${payload.id}/`
})

export default function* rootSaga () {
  yield takeLatest(CONSTANTS.GET_GROUP, doGetGroup)
  yield takeLatest(CONSTANTS.GET_GROUPS, doGetGroups)
  yield takeLatest(CONSTANTS.CREATE_GROUP, doCreateGroup)
  yield takeLatest(CONSTANTS.UPDATE_GROUP, doUpdateGroup)
  yield takeLatest(CONSTANTS.DELETE_GROUP, doDeleteGroup)

  yield takeLatest(CONSTANTS.GET_CATEGORY, doGetCategory)
  yield takeLatest(CONSTANTS.GET_CATEGORIES, doGetCategories)
  yield takeLatest(CONSTANTS.CREATE_CATEGORY, doCreateCategory)
  yield takeLatest(CONSTANTS.UPDATE_CATEGORY, doUpdateCategory)
  yield takeLatest(CONSTANTS.DELETE_CATEGORY, doDeleteCategory)

  yield takeLatest(CONSTANTS.GET_PRODUCTS, doGetProducts)
  yield takeLatest(CONSTANTS.CREATE_PRODUCT, doCreateProduct)
  yield takeLatest(CONSTANTS.UPDATE_PRODUCT, doUpdateProduct)
  yield takeLatest(CONSTANTS.DELETE_PRODUCT, doDeleteProduct)
  
  yield takeLatest(CONSTANTS.GET_COINS, doGetCoins)
  yield takeLatest(CONSTANTS.UPDATE_COIN, doUpdateCoin)

  yield takeLatest(CONSTANTS.GET_SUBSCRIPTIONS_PRICING, doGetSubscriptionsPricing)
  yield takeLatest(CONSTANTS.UPDTAE_SUBSCRIPTION_PRICING, doUpdateSubscription)
  
  yield takeLatest(CONSTANTS.GET_EXERCISE, doGetExercise)
  yield takeLatest(CONSTANTS.GET_EXERCISES, doGetExercises)
  yield takeLatest(CONSTANTS.CREATE_EXERCISE, doCreateExercise)
  yield takeLatest(CONSTANTS.UPDATE_EXERCISE, doUpdateExercise)
  yield takeLatest(CONSTANTS.DELETE_EXERCISE, doDeleteExercise)

  yield takeLatest(CONSTANTS.GET_POST, doGetPost)
  yield takeLatest(CONSTANTS.GET_POSTS, doGetPosts)
  yield takeLatest(CONSTANTS.CREATE_POST, doCreatePost)
  yield takeLatest(CONSTANTS.UPDATE_POST, doUpdatePost)
}
