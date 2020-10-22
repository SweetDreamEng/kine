import React from 'react'
import { Link } from 'react-router-dom'

import Logo from 'assets/images/logo-blue.svg'
import VerificationCodeInput from 'components/VerificationCodeInput'

import './auth-style.scss'

const AuthLayout = ({
  formFields = [],
  formTitle = '',
  buttonText = '',
  textLink = '',
  linkTo = '',
  errorText,
  handleSubmit,
  handleFormChange
}) => {
  return (
    <div className="auth-page">
      <div className="auth-page__left-container">
        <div className="auth-page__logo-container">
          <img className="auth-page__logo" src={Logo} alt="Kinelite Logo" />
          <p className="auth-page__logo-text">Admin Console</p>
        </div>
        <div className="auth-page__form-container">
          <p className="auth-page__form-title">{formTitle}</p>

          {/* Handle error */}
          {errorText ? <p className="auth-page__form-error">{errorText}</p> : null}
          <form onSubmit={handleSubmit} className="auth-page__form">
            {formFields.map((field, key) => {
              return (field.name !== 'code' ?
                <input
                  key={key}
                  type={field.type}
                  name={field.name}
                  id={field.name}
                  placeholder={field.placeholder}
                  className={"text--input"}
                  onChange={handleFormChange}
                  autoComplete="true"
                /> :
                <VerificationCodeInput />
              );
            })}

            {textLink ? (
              <Link
                className="auth-page__form-forget-password text--link"
                to={linkTo}
              >
                {textLink}
              </Link>
            ) : null}
            <button className="auth-page__form-button primary--button">
              {buttonText}
            </button>
          </form>
        </div>
      </div>
      <div className="auth-page__right-container"></div>
    </div>
  )
}

export default AuthLayout
