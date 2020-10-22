import { call, put, takeEvery } from 'redux-saga/effects'
import { types } from '../modules/auth/constants'
import AuthClass from './auth.class'

/**
 * @description check the current autheticated user.
 */
function* authCurrentAuthenticatedUser() {
  try {
    const user = yield call(AuthClass.authCurrentAuthenticatedUser);
    localStorage.setItem('token', JSON.stringify(user.signInUserSession.accessToken.jwtToken));
    yield put({ type: types.CURRENT_AUTHENTICATED_USER_SUCCESS, payload: user });
  } catch (error) {
    yield put({ type: types.CURRENT_AUTHENTICATED_USER_FAILURE, payload: error });
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
}

/**
 * @description check the current autheticated user.
 */
function* authCurrentUserPoolUser() {
  try {
    const user = yield call(AuthClass.authCurrentUserPoolUser);
    localStorage.setItem('token', JSON.stringify(user.signInUserSession.accessToken.jwtToken));
    yield put({ type: types.CURRENT_USER_POOL_SUCCESS, payload: user });
  } catch (error) {
    yield put({ type: types.CURRENT_USER_POOL_FAILURE, payload: null });
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
}

/**
 * @description user sign in.
 */
function* authSignIn({ payload }) {
  try {
    const user = yield call(AuthClass.authSignIn, payload);

    if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
      yield put({ type: types.SIGN_IN_NEW_PASSWORD_REQUIRED, payload: user })
    } else {
      yield put({ type: types.SIGN_IN_USER_SUCCESS, payload: user });
    }
    localStorage.setItem('token', JSON.stringify(user.signInUserSession.accessToken.jwtToken));
  } catch (error) {
    const { message, code } = error;

    if (message === 'Password reset required for the user') {
      yield put({ type: types.SIGN_IN_RESET_PASSWORD_REQUEST, payload: payload })
    }
    yield put({ type: types.SIGN_IN_USER_FAILURE, payload: error });

    //check if user has not confirmed account.
    if (code === 'UserNotConfirmedException') {
      //resend code
      yield put({ type: types.SIGN_UP_RESEND_CODE_REQUEST, payload });
    }
  }
}

/**
 * @description user logout.
 */
function* authLogout({ payload }) {
  try {
    yield call(AuthClass.authLogout, payload);
    yield put({ type: types.LOGOUT_USER_SUCCESS });
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  } catch (error) {
    const { message } = error;
    yield put({ type: types.LOGOUT_USER_FAILURE, payload: error });
  }
}

/**
 * @description user forgot password & send code to user cellphone.
 */
function* authForgotPassword({ payload }) {
  console.log('saga')
  try {
    yield call(AuthClass.authForgotPassword, payload);
    console.log('For security reasons, you will be receiving a SMS message with your code.');
    yield put({ type: types.FORGOT_PASSWORD_SUCCESS });
  } catch (error) {
    const { message, code } = error;
    yield put({ type: types.FORGOT_PASSWORD_FAILURE, payload: error });
  }
}

/**
 * @description user forgot password submit.
 */
function* authForgotPasswordSubmit({ payload }) {
  try {
    yield call(AuthClass.authForgotPasswordSubmit, payload);
    console.log('password changed successfully, you will be redirected to sign in page.');
    yield put({ type: types.FORGOT_PASSWORD_SUBMIT_SUCCESS });
  } catch (error) {
    const { message, code } = error;
    yield put({ type: types.FORGOT_PASSWORD_SUBMIT_FAILURE, payload: error });
  }
}

/**
 * @description change password.
*/
function* authChangePassword({ payload }) {
  try {
    const user = yield call(AuthClass.authChangePassword, payload);
    console.log('password changed successfully, you will be redirected to sign in page.');
    yield put({ type: types.CHANGE_PASSWORD_SUCCESS });
  } catch (error) {
    yield put({ type: types.CHANGE_PASSWORD_FAILURE, payload: error });
  }
}

/**
 * @description send verification code to email or cell phone.
 */
function* authSendVerificationCode({ payload }) {
  try {
    yield call(AuthClass.authForgotPassword, payload);
    console.log('For security reasons, you will be receiving a SMS message with your code.');
    yield put({ type: types.SIGN_IN_RESET_PASSWORD_SUCCESS });
  } catch (error) {
    yield put({ type: types.SIGN_IN_RESET_PASSWORD_FAILURE, payload: error });
  }
}

/**
 * @description reset password.
 */
function* authResetPassword({ payload }) {
  try {
    yield call(AuthClass.authResetPassword, payload);
    console.log('Password has successfully reset');
    yield put({ type: types.RESET_PASSWORD_SUCCESS });
  } catch (error) {
    console.log('error', error)
    yield put({ type: types.RESET_PASSWORD_FAILURE, payload: error });
  }
}

export default function* AuthSaga() {
  yield takeEvery(types.CURRENT_AUTHENTICATED_USER_REQUEST, authCurrentAuthenticatedUser);
  yield takeEvery(types.CURRENT_USER_POOL_REQUEST, authCurrentUserPoolUser);
  yield takeEvery(types.SIGN_IN_USER_REQUEST, authSignIn);
  yield takeEvery(types.LOGOUT_USER_REQUEST, authLogout);
  yield takeEvery(types.CHANGE_PASSWORD_REQUEST, authChangePassword);
  yield takeEvery(types.FORGOT_PASSWORD_REQUEST, authForgotPassword);
  yield takeEvery(types.FORGOT_PASSWORD_SUBMIT_REQUEST, authForgotPasswordSubmit);
  yield takeEvery(types.SIGN_IN_RESET_PASSWORD_REQUEST, authSendVerificationCode);
  yield takeEvery(types.RESET_PASSWORD_REQUEST, authResetPassword);
}
