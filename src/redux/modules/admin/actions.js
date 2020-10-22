import { createAction } from 'redux-actions'
import * as CONSTANTS from './constants'

export const createGroup = createAction(CONSTANTS.CREATE_GROUP)
export const updateGroup = createAction(CONSTANTS.UPDATE_GROUP)
export const getGroups = createAction(CONSTANTS.GET_GROUPS)
export const getGroup = createAction(CONSTANTS.GET_GROUP)
export const deleteGroup = createAction(CONSTANTS.DELETE_GROUP)

export const createCategory = createAction(CONSTANTS.CREATE_CATEGORY)
export const updateCategory = createAction(CONSTANTS.UPDATE_CATEGORY)
export const getCategories = createAction(CONSTANTS.GET_CATEGORIES)
export const getCategory = createAction(CONSTANTS.GET_CATEGORY)
export const deleteCategory = createAction(CONSTANTS.DELETE_CATEGORY)

export const createProduct = createAction(CONSTANTS.CREATE_PRODUCT)
export const updateProduct = createAction(CONSTANTS.UPDATE_PRODUCT)
export const getProducts = createAction(CONSTANTS.GET_PRODUCTS)
export const deleteProduct = createAction(CONSTANTS.DELETE_PRODUCT)

export const getCoins = createAction(CONSTANTS.GET_COINS)
export const updateCoin = createAction(CONSTANTS.UPDATE_COIN)

export const getSubscriptionsPricing = createAction(CONSTANTS.GET_SUBSCRIPTIONS_PRICING)
export const updateSubscriptionPrice = createAction(CONSTANTS.UPDATE_SUBSCRIPTION_PRICE)

export const createExercise = createAction(CONSTANTS.CREATE_EXERCISE)
export const updateExercise = createAction(CONSTANTS.UPDATE_EXERCISE)
export const getExercises = createAction(CONSTANTS.GET_EXERCISES)
export const getExercise = createAction(CONSTANTS.GET_EXERCISE)
export const deleteExercise = createAction(CONSTANTS.DELETE_EXERCISE)

export const createPost = createAction(CONSTANTS.CREATE_POST)
export const updatePost = createAction(CONSTANTS.UPDATE_POST)
export const getPosts = createAction(CONSTANTS.GET_POSTS)
export const getPost = createActon(CONSTANTS.GET_POST)
