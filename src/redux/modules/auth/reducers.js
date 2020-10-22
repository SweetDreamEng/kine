import { types } from './constants';

/**
 * @param {object} user logged in.
 * @param {object} organization logged in organization.
 * @param {array} organizations list of all user's organizations
 * @param {object} form when creating an account.
 * @param {boolean} loading_current_user check if there is an account logged when the application loads.
 * @param {string} redirect path to redirect user to.
 * @param {object} error errors that may happen in authetication.
 */
const INITIAL_STATE = {
  form: {
    email: '',
    password: '',
  },
  loading_current_user: true,
  redirect: null,
  error: null,
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  if (action.type.match(/REQUEST/g)) {
    state = {
      ...state,
      error: null,
      redirect: null,
    };
  }

  switch (action.type) {
    case types.CURRENT_AUTHENTICATED_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: null,
      };

    case types.CURRENT_AUTHENTICATED_USER_FAILURE:
      return {
        ...state,
        user: null,
        error: action.payload,
        loading_current_user: false,
      };

    case types.CURRENT_USER_POOL_SUCCESS:
      return {
        ...state,
        // user: action.payload,
        error: null,
        loading_current_user: false,
      };

    case types.CURRENT_USER_POOL_FAILURE:
      return {
        ...state,
        user: null,
        error: action.payload,
        loading_current_user: false,
      };

    case types.SIGN_IN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        redirect: '/programs',
        error: null,
      };

    case types.SIGN_IN_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading_current_user: false,
      };

    case types.SIGN_IN_NEW_PASSWORD_REQUIRED:
      return {
        ...state,
        user: action.payload,
        redirect: '/change',
      }

    case types.LOGOUT_USER_SUCCESS:
      return {
        ...state,
        user: null,
      };

    case types.LOGOUT_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case types.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        redirect: '/forgot-code',
      };

    case types.FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case types.FORGOT_PASSWORD_SUBMIT_SUCCESS:
      return {
        ...state,
        redirect: '/login',
      };

    case types.FORGOT_PASSWORD_SUBMIT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case types.ON_CHANGE_FORM:
      return {
        ...state,
        form: { ...state.form, ...action.payload },
        error: null,
        redirect: null,
      };

    case types.REDIRECT_REQUEST:
      return {
        ...state,
        redirect: action.payload,
      };

    case types.CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        redirect: '/login',
      };

    case types.CHANGE_PASSWORD_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case types.VERIFICATION_CODE_INPUTED:
      return {
        ...state,
        redirect: '/reset'
      };

    case types.SIGN_IN_RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        redirect: '/new-password'
      };

    case types.SIGN_IN_RESET_PASSWORD_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    case types.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        redirect: '/login'
      };

    case types.RESET_PASSWORD_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};

export default AuthReducer;
