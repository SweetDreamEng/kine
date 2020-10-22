import React from 'react'

import { connect, useDispatch } from 'react-redux'
import { verificationCodeInputed } from 'redux/modules/auth/actions'

import AuthLayout from '.'
import useRedirect from 'hooks/useRedirect'

const ForgotPasswordCode = ({ redirect }) => {

  const dispatch = useDispatch()

  const fileds = [
    {
      name: "code",
      type: "text",
    }
  ]

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(verificationCodeInputed())
  }

  useRedirect(redirect)

  return <AuthLayout
    formFields={fileds}
    formTitle="Verify Your Code"
    buttonText="Verify"
    handleSubmit={handleSubmit}
  />
}

const mapStateToProps = ({ AuthReducer }) => ({
  redirect: AuthReducer.redirect
})

export default connect(mapStateToProps)(ForgotPasswordCode)
