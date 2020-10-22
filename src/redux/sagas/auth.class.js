import { Auth } from 'aws-amplify';
import { validateEmail } from 'helpers/helpers';

/**
 * @description Authentication API calls.
 */
class AuthClass {
  resendCodeTry = 0;

  /**
   * @description check the current autheticated user.
   * @param {object} payload
   * @returns Promise
   */
  authCurrentAuthenticatedUser() {
    return Auth.currentAuthenticatedUser();
  }

  /**
   * @description check the current autheticated user.
   * @param {object} payload
   * @returns Promise
   */
  authCurrentUserPoolUser() {
    return Auth.currentUserPoolUser();
  }

  /**
   * @description check user attribute.
   * @param {string} payload attribute
   * @returns Promise
   */
  authVerifyCurrentUserAttribute(payload) {
    return Auth.verifyCurrentUserAttribute(payload);
  }

  /**
   * @description verify user attribute.
   * @param {string} payload attribute
   * @returns Promise
   */
  authVerifyUserAttribute(payload) {
    return Auth.verifyUserAttribute(payload.user, payload.field);
  }

  /**
   * @description update user attributes.
   * @param {object} payload attributes
   * @returns Promise
   */
  authUpdateUserAttributes({ user, attributes }) {
    return Auth.updateUserAttributes(user, attributes);
  }

  /**
   * @description login with google, facebook, apple etc...
   * @returns Promise
   */
  authFederatedSignIn({ provider }) {
    return Auth.federatedSignIn({ provider: provider });
  }

  /**
   * @description sign in user.
   * @param {object} payload
   * @returns Promise
   */
  authSignIn({ email, password }) {
    return Auth.signIn(email, password);
  }

  /**
   * @description create user account.
   * @returns Promise
   */
  authSignUp({ email, phone_number, password }) {
    if (validateEmail(email)) {
      throw {
        message: validateEmail(email),
      };
    } else if (!phone_number.match(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/)) {
      throw {
        message: 'phone number is invalid.',
        code: 'InvalidParameterException',
      };
    }

    return Auth.signUp({
      username: email,
      password: password,
      attributes: {
        email: email,
        phone_number: phone_number,
      },
    });
  }

  /**
   * @description verify user after sign up.
   * @returns Promise
   */
  authConfirmSignUp({ email, code }) {
    if (code.length < 6) {
      throw {
        message: 'Invalid code. try again.',
      };
    } else if (!email) {
      throw {
        message: 'Email not found, please try to create your account later.',
      };
    }

    return Auth.confirmSignUp(email, code);
  }

  /**
   * @description resend code to confirm account created in sign up.
   * @returns Promise
   */
  authResendCodeSignUp({ email }) {
    this.authSignUpresendCodeTry++;
    return Auth.resendSignUp(email);
  }

  /**
   * @description logout user.
   * @returns Promise
   */
  authLogout() {
    return Auth.signOut({ global: true });
  }

  /**
   * @description user forgot password & send code to user cellphone.
   * @returns Promise
   */
  authForgotPassword({ email }) {
    if (validateEmail(email)) {
      throw {
        message: validateEmail(email),
      };
    }
    return Auth.forgotPassword(email);
  }

  /**
   * @description user forgot password submit.
   * @returns Promise
   */
  authForgotPasswordSubmit({ email, code, new_password, confirm_password }) {
    if (validateEmail(email)) {
      throw {
        message: validateEmail(email),
      };
    } else if (new_password !== confirm_password) {
      throw {
        code: 'PasswordDoesNotMatch',
        message: 'New password and confirm password fields does not match.',
      };
    }

    return Auth.forgotPasswordSubmit(email, code, new_password);
  }

  /**
   * @description change user password.
  */
  authChangePassword({ user, email, password, new_password, confirm_password }) {
    if (validateEmail(email)) {
      throw {
        message: validateEmail(email),
      };
    } else if (new_password !== confirm_password) {
      throw {
        code: 'PasswordDoesNotMatch',
        message: 'New Password and confirm password fields does not match.',
      };
    }

    return Auth.completeNewPassword(
      user,
      new_password,
      {
        email: email,
        name: email
      }
    )
  }

  /**
   * @description reset user password.
   */
  authResetPassword({ email, code, new_password, confirm_password }) {
    if (new_password === confirm_password) {
      return Auth.forgotPasswordSubmit(email, code, new_password);
    } else {
      throw {
        code: 'PasswordDoesNotMatch',
        message: 'New password and confirm password fields does not match.',
      }
    }
  }

}

export default new AuthClass();
