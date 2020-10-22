import { types } from "./constants";

/**
 * @description get the current autheticated user.
 */
export const authCurrentAuthenticatedUser = () => ({
  type: types.CURRENT_AUTHENTICATED_USER_REQUEST
});

/**
 * @description get current user pool request. 
 */
export const authCurrentUserPoolUser = () => ({
  type: types.CURRENT_USER_POOL_REQUEST
});

/**
 * @description login user.
 */
export const authSignIn = (payload) => ({
  type: types.SIGN_IN_USER_REQUEST,
  payload
});

/**
 * @description create user account. 
 */
export const authSignUp = (payload) => ({
  type: types.SIGN_UP_USER_REQUEST,
  payload
});

/**
 * @description confirm sign up user with sms code. 
 */
export const authConfirmSignUp = (payload) => ({
  type: types.CONFIRM_SIGN_UP_REQUEST,
  payload
});

/**
 * @description resend code to confirm account created in sign up. 
 */
export const authResendCodeSignUp = (payload) => ({
  type: types.SIGN_UP_RESEND_CODE_REQUEST,
  payload
});

/**
 * @description logout user. 
 */
export const authLogout = () => ({
  type: types.LOGOUT_USER_REQUEST
});

/**
 * @description user forgot password & send code to user cellphone. 
 */
export const authForgotPassword = (payload) => ({
  type: types.FORGOT_PASSWORD_REQUEST,
  payload
});

/**
 * @description user forgot password submit. 
 */
export const authForgotPasswordSubmit = (payload) => ({
  type: types.FORGOT_PASSWORD_SUBMIT_REQUEST,
  payload
});

/**
 * @description save verification code and go to reset page
*/
export const verificationCodeInputed = () => ({
  type: types.VERIFICATION_CODE_INPUTED
})

/** 
 * @description change password.
 * @param {object} payload
*/
export const changePassword = (payload) => ({
  type: types.CHANGE_PASSWORD_REQUEST,
  payload
})

/**
 * @description login with google, facebook, apple etc... 
 */
export const authFederatedSignIn = (payload) => ({
  type: types.FEDERATED_SIGN_IN_REQUEST,
  payload
});

/**
 * @description update user attributes
 * @param {object} payload 
 */
export const authUpdateUserAttributes = (payload) => ({
  type: types.UPDATE_USER_ATTRIBUTES_REQUEST,
  payload
});

/**
 * @description clean redirect to prop.
 */
export const cleanRedirect = () => ({
  type: types.CLEAN_REDIRECT_REQUEST,
})

/**
 * @description on change create account form.
 * @param {object} payload form state within a component.  
 */
export const onChangeForm = (payload) => ({
  type: types.ON_CHANGE_FORM,
  payload
});

/**
 * @description creates organization admin
 * @param {object} payload  {firstName, lastName, organization, industry} 
 */
export const createAdmin = (payload) => ({
  type: types.CREATE_ADMIN_REQUEST,
  payload
});

/**
 * @description update user status
 * @param {string} status  unavailable | available | idle | busy
 */
export const updateUserStatus = (payload) => ({
  type: types.UPDATE_USER_STATUS_REQUEST,
  payload
});

/**
 * @description reset password
 */
export const authConfirmForgotPassword = (payload) => ({
  type: types.RESET_PASSWORD_REQUEST,
  payload
})